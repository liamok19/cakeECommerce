import { gql } from "@apollo/client";

/*
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      carts {
        _id
        purchaseDate
        products {
          _id
          productName
          pricing
          quantity
          category {
            _id
            name
          }
        }
      }
    }
  }
`;
*/

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products{
      _id
      productName
      pricing
      quantity
      image
      category {
        _id
        name
      }
    }
  }
`;

/*
export const QUERY_ALL_PRODUCTS = gql`
query getProducts{
products{
  _id
  productName
  pricing
  quantity
  category{
    _id
    name
  }
} 
`;
*/
