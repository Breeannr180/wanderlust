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
    $userId: ID!
    $name: String!
    $lat: Float!
    $long: Float!
  ) {
    addLocation(userId: $userId, name: $name, lat: $lat, long: $long) {
      _id
      name
      lat
      long
      savedFeatures {
        _id
        name
      }
    }
  }
`;

export const ADD_FEATURE = gql`
  mutation addFeature($locationId: ID!, $name: String!, $dist: Float!, $rate: Int!, $wikidata: String!) {
    addFeature(
      locationId: $locationId
      name: $name
      dist: $dist
      rate: $rate
      wikidata: $wikidata
    ) {
      _id
      name
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

export const REMOVE_LOCATION = gql`
  mutation removeUser($userId: ID!, $locationId: ID!) {
    removeUser(userId: $userId, locationId: $locationId) {
      location {
        _id
        name
      }
    }
  }
`;

export const REMOVE_FEATURE = gql`
  mutation removeUser($locationId: ID!, $featureId: ID!) {
    removeUser(locationId: $locationId, featureId: $featureId) {
      feature {
        _id
        name
      }
    }
  }
`;
