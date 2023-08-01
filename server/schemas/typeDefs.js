const { gql } = require("apollo-server-express");

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
`;

module.exports = typeDefs;
