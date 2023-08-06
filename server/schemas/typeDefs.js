const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    savedLocations: [Location]
  }

  type Location {
    _id: ID!
    name: String!
    lat: Float!
    long: Float!
    savedFeatures: [Feature]
  }

  type Feature {
    _id: ID!
    name: String!
    dist: Int!
    rate: Int!
    wikidata: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    location(locationId: ID!): Location
    feature(featureId: ID!): Feature
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    addLocation(userId: ID!, name: String!, lat: Float!, long: Float!): Location
    addFeature(
      locationId: ID!
      name: String!
      dist: Int!
      rate: Int!
      wikidata: String!
    ): Feature
    removeUser(userId: ID!): User
    removeLocation(userId: ID!, locationId: ID!): Location
    removeFeature(locationId: ID!, featureId: ID!): Feature
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
