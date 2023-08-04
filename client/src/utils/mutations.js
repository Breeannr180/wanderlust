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
  mutation addLocation(
    $username: String!
    $name: String!
    $lat: Int!
    $long: Int!
  ) {
    addLocation(username: $username, name: $name, lat: $lat, long: $long) {
      _id: ID
      name: String
      lat: Int
      long: Int
      savedFeatures {
        _id
        name
      }
    }
  }
`;

export const ADD_FEATURE = gql`
  mutation addFeature(
    $locationName: String!
    $name: String!
    $dist: Int!
    $rate: Int!
    $wikidata: String!
  ) {
    addFeature(
      locationName: $locationName
      name: $name
      dist: $dist
      rate: $rate
      wikidata: $wikidata
    ) {
      _id: ID
      name: String
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
