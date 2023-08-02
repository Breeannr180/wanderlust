const { User, Location, Feature } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedLocations')
    },
    location: async (parent, { name }) => {
      return Location.findOne({ name }).populate('savedFeatures')
    },
    feature: async (parent, { name }) => {
      return Feature.findOne({ name })
    },
  },
  Mutation: {
    addUser: async () => { },
    editUser: async () => { },
    addLocation: async () => { },
    editLocation: async () => { },
    login: async () => { },
  },
};

module.exports = resolvers;
