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
    lat: Int!
    long: Int!
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
    user(username: String!): User
    location(name: String!): Location
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    editUser(username: String!, password: String!): Auth
    addLocation(name: String!, lat: Int!, long: Int!): Location
    editLocation(name: String!, lat: Int!, long: Int!): Location
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
