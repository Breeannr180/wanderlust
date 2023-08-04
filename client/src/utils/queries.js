import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(_id: $userId) {
      _id
      username
      savedLocations {
        _id
        name
        lat
        long      
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query location($locationId: ID!) {
    location(_id: $locationId) {
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
  query feature($featureId: ID!) {
    feature(_id: $featureId) {
        _id
        name
        dist
        rate
        wikidata
      }
  }
`;

