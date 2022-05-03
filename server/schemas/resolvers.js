const { AuthenticationError } = require("apollo-server-express");
const { User, Cart, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("products");
    },
    products: async (parent, { username }) => {
      return (params = username ? { username } : {});
      return Product.find(params).sort({ createdAt: -1 });
    },
    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
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
