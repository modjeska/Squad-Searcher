const { AuthenticationError } = require('apollo-server-express');
const { User, Squad } = require('../models');
const { getJWTToken } = require('../util/authUtils');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },

    squads: async () => {
      return Squad.find({}).populate('users');
    },
  }, 

  Mutation: {
    signUp: async (parent, { username, password }) => {
      const newUser = User.create({ username, password });
      const token = getJWTToken({ username, _id: newUser._id });
      return { token, user: newUser };
    },

    signIn: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      
      if (!user) {
        throw new AuthenticationError('Username is not found');
      }
      
      const isPWCorrect = await user.isPasswordCorrect(password);
      if (isPWCorrect) {
        const token = getJWTToken({ username, _id: user._id });
        return { token, user }; 
      }

      throw new AuthenticationError('Password is not correct');
    },

    addSquad: async (parent, { 
      title,
      game,
      platform,
      isRanked,
      isCasual,
    }, { loggedInUserId }) => {
      if (!loggedInUserId) {
        throw new AuthenticationError('Must be signed in for this mutation.');
      }
      return (await Squad.create({
        title,
        game,
        platform,
        isRanked,
        isCasual,
        users: [loggedInUserId],
      })).populate('users');
    },

    addUserToSquad: async (parent, { squadId }, { loggedInUserId }) => {
      if (!loggedInUserId) {
        throw new AuthenticationError('Must be signed in for this mutation.');
      }
      return Squad.findOneAndUpdate(
        { _id: squadId },
        {
          $addToSet: { users: loggedInUserId },
        },
        {
          new: true, // returns the updated model after.
          runValidators: true, // checks against schema.
        }
      ).populate('users')
    },

    removeSquad: async (parent, { squadId }, { loggedInUserId }) => {
      if (!loggedInUserId) {
        throw new AuthenticationError('Must be signed in for this mutation.');
      }
      return (await Squad.findOneAndDelete({ _id: squadId })).populated('users');
    },

    removeUserFromSquad: async (parent, { squadId }, { loggedInUserId }) => {
      if (!loggedInUserId) {
        throw new AuthenticationError('Must be signed in for this mutation.');
      }
      return Squad.findOneAndUpdate(
        { _id: squadId },
        {
          $pull : { users: loggedInUserId },
        },
        { new: true }
      ).populate('users');
    }
  }
}

module.exports = resolvers;