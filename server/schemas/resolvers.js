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
      // group our products by id while using reducer

      // count as we go
      // key is id, value is count
      try {
        const { products } = await cart.populate("products");

        const productsGrouped = Object.values(
          // variable that pulls in the value of products
          products.reduce((result, product) => {
            //reduce the product by it's previous and current state value
            // console.log(result)
            // set iniial value of 0 if the product idea oen't eist in result
            console.log(products);
            if (!result[product._id]) {
              //if the current object (but it's id ) doesn't exist
              // Set initial Value
              result[product._id] = {
                // rertun the details of the product based on it's ID and setting it with a qty of 1
                ...product._doc,
                qty: 1,
              };
            } else {
              // Increment the number
              result[product._id].qty += 1; //increment object qty by i
            }

            return result;
          }, {})
        );

        for (let i = 0; i < productsGrouped.length; i++) {
          //loop through the productsGrouped by it's length
          const currentProduct = productsGrouped[i]; //setting varible before it's called
          console.log(currentProduct);
          const product = await stripe.products.create({
            id: currentProduct._id,
            name: currentProduct.productName,
            images: [`${url}/images/${currentProduct.image}`],
          });

          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: currentProduct.pricing * 100,
            currency: "aud",
          });

          line_items.push({
            price: price.id,
            // quantity: 1,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
            quantity: currentProduct.qty,
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
