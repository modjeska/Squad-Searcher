const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
      _id: ID!
      username: String!
    }

    type Squad {
      _id: ID!
      title: String!
      game: String!
      platform: String!
      isRanked: String!
      isCasual: String!
      users: [User]!
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
      users: [User]!
      squads: [Squad]!
    }

    type Mutation {
      signUp(username: String!, password: String!): Auth
      signIn(username: String!, password: String!): Auth

      addSquad(title: String!, game: String!, platform: String!, isRanked: Boolean!, isCasual: Boolean!): Squad
      addUserToSquad(squadId: ID!): Squad
      removeSquad(squadId: ID!): Squad
      removeUserFromSquad(squadId: ID!): Squad
    }
`;

module.exports = typeDefs;