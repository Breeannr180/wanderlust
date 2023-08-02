import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      savedLocations {
        _id
        name
        lat
        long
        savedFeatures {
            _id
            name
            dist
            rate
            wikidata
        }
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query location($name: String!) {
    location(name: $name) {
        _id
        name
        lat
        long
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

export const QUERY_FEATURES = gql`
  query feature($name: String!) {
    feature(name: $name) {
        _id
        name
        dist
        rate
        wikidata
      }
  }
`;

