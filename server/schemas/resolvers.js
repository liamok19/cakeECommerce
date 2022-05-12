const { AuthenticationError } = require("apollo-server-express");
const { stripIgnoredCharacters } = require("graphql");
const { User, Cart, Product, Category } = require("../models");
const { populate } = require("../models/Cart");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "sk_test_51KxpOYDyTG5YEiw67gvRGWpXD6Fz8YWKoCvAqZMkXAlhcdGgrgyqTYIxWymXBRsINxaryQxlHvXpVDYnz33SQKcs00Iq9Q8XsV"
);

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");

      // return (params = username ? { username } : {});
      // return Product.find(params).sort({ createdAt: -1 });
    },
    // product: async (parent, { productId }) => {
    //   return Product.findOne({ _id: productId });
    // },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },

    // user: async () => {
    //   return await User.find();
    // },

    user: async (parent, args, context) => {
      if (context.user) {
        console.log("before");
        const user = await User.findById(context.user._id).populate({
          path: "carts.products",
          populate: "category",
        });

        console.log("after");
        user.carts.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      } else {
        throw new AuthenticationError("You must be logged in to order");
      }
      // return User.findOne({ username }).populate("products");
    },
    //   user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },

    cart: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "carts.products",
          populate: "category",
        });

        return user.carts.id(_id);
      }
      throw new AuthenticationError("You must be logged in for cart option");
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const cart = new Cart({ products: args.products });
      const line_items = [];

      console.log(args);
      try {
        const { products } = await cart.populate("products");

        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].productName,
            images: [`${url}/images/${products[i].image}`],
          });

          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].pricing * 100,
            currency: "aud",
          });

          line_items.push({
            price: price.id,
            quantity: 1,
          });
        }
        console.log(args);
        console.log("this is a string");

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });
        console.log(session);
        return { session: session.id };

      } catch (err) {
        console.log(err);
      }

    },
  },

  Mutation: {
    addUser: async (paren, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};
module.exports = resolvers;
