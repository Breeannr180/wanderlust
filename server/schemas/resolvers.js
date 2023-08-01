const { User, Location, Feature } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {},
    location: async () => {},
  },
  Mutation: {
    addUser: async () => {},
    editUser: async () => {},
    addLocation: async () => {},
    editLocation: async () => {},
    login: async () => {},
  },
};

module.exports = resolvers;
