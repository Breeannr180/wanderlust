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
  mutation addLocation($userId: ID!, $name: String!, $lat: Int!, $long: Int!) {
    addLocation(userId: $userId, $name: name, $lat: lat, $long: long) {
       _id: ID!
      name: String!
      lat: Int!
      long: Int!
      savedFeatures {
        _id
        name        
      }    
    }
  }
`;

export const ADD_FEATURE = gql`
addFeature($locationId: ID!, $name: String!, $dist: Int!, $rate: Int!, $wikidata: String!) {
    addFeature(locationId: $locationId, name: $name, dist: $dist, rate: $rate, wikidata: $wikidata) {
       _id: ID!
      name: String!        
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      user {
        _id
        username
      }
    }
  }
`;