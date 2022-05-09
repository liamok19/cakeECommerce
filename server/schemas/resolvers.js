const { AuthenticationError } = require("apollo-server-express");
const { User, Cart, Product, Category } = require("../models");
const { populate } = require("../models/Cart");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async() =>{
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    
      // return (params = username ? { username } : {});
      // return Product.find(params).sort({ createdAt: -1 });
    },
    // product: async (parent, { productId }) => {
    //   return Product.findOne({ _id: productId });
    // },
  product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },

    users: async () => {
      
      return User.find();
    },
    user: async (parent, arsg, context) => {
      if(context.user){
        const user = await User.findById(context.user._id).populate({
          path: 'carts.products',
          populate: 'category'
        });

        user.carts.sort((a,b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      // return User.findOne({ username }).populate("products");
      throw new AuthenticationError('You must be logged in')
    },
    cart: async (parent, {_id}, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'carts.products',
          populate: 'category'
        })
        return user.carts.id(_id);
      }
      throw new AuthenticationError('You must be logged in')
    }
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
