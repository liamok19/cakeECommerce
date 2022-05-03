const { AuthenticationError } = require("apollo-server-express");
const { User, Cart, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("products");
    },
    users: async (parent, { username }) => {
      return User.findOne({ username }).populate("products");
    },
    products: async (parents, { username }) => {
      return (params = username ? { username } : {});
      return Product.find(params).sort({ createdAt: -1 });
    },
    products: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
  },
};
