const { gql } = require("apollo-server-express");
   
// testing without the following the type Product section

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    products: [Product]
  }
  type Product {
    _id: ID
    productname: String
    productPricing: Float
    productStock: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
    product(productId: ID!): Product
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;


module.exports = typeDefs;
