const { User, Board } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {},
    board: async () => {},
  },
  Mutation: {
    addUser: async () => {},
    editUser: async () => {},
    addBoard: async () => {},
    editBoard: async () => {},
    login: async () => {},
  },
};

module.exports = resolvers;
