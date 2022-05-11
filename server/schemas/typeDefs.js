const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    productName: String
    pricing: Float
    image: String
    quantity: Int
    category: Category
  }

  type Cart {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    carts: [Cart]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    cart(_id: ID!): Cart
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addCart(products: [ID]!): Cart
    updateUser(username: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
