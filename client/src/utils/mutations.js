import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation($username: String!, $name: String!, $lat: Int!, $long: Int!) {
    addLocation(username: $username, $name: name, $lat: lat, $long: long) {
       _id: ID!
      name: String!
      lat: Int!
      long: Int!
      savedFeatures {
        _id
        name
        dist
        rate
        wikidata
      }    
    }
  }
`;
