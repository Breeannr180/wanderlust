const { User, Location, Feature } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('savedLocations')
    },
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
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    addLocation: async (parent, { username, name, lat, long }) => {
      const location = await Location.create({ name, lat, long })
      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { savedLocations: location._id } }
      );
      return location
    },
    addFeature: async (parent, { locationName, name, dist, rate, wikidata }) => {
      const feature = await Feature.create({ name, dist, rate, wikidata })
      await Location.findOneAndUpdate(
        { name: locationName },
        { $addToSet: { savedFeatures: feature._id } }
      );
      return feature
    },
    removeLocation: async (parent, { userId, locationId }) => {
      await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedLocations: { _id: locationId } } },
        { new: true }
      );
      return Location.findOneAndDelete({ _id: locationId })
    },
    removeFeature: async (parent, { locationId, featureId }) => {
      await Location.findOneAndUpdate(
        { _id: locationId },
        { $pull: { savedFeatures: { _id: featureId } } },
        { new: true }
      );
      return Feature.findOneAndDelete({ _id: featureId })
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username }).populate('savedLocations');

      if (!user) {
        throw new AuthenticationError(`${username} does not exist`);
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
