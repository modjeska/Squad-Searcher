const { User, Squad } = require('../models');

const resolvers = {
  Query: {
    squads: async () => {
      return Squad.find({});
    },
  }, 

  Mutation: {
    addSquad: async (parent, { 
      title,
      game,
      platform,
      isRanked,
      isCasual,
    }) => {
      return Squad.create({ title, game, platform, isRanked, isCasual });
    },

    addUserToSquad: async (parent, {
      squadId,
      username,
    }) => {
      Squad.findOneAndUpdate(
        { _id: squadId },
        {
          $addToSet: { users: username },
        },
        {
          new: true, // returns the updated model after.
          runValidators: true, // checks against schema.
        }
      )
    },

    removeSquad: async (parent, { squadId }) => {
      return Squad.findOneAndDelete({ _id: squadId });
    },

    removeUser: async (parent, { squadId, username }) => {
      return Squad.findOneAndUpdate(
        { _id: squadId },
        {
          $pull : { users: username },
        },
        { new: true }
      )
    }
  }
}

module.exports = resolvers;