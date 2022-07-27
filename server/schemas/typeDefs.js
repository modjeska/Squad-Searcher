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
        platform: String!!
        isRanked: String!
        isCasual: String!
        users: [User]!
    }

    type Query {
        squads: [Squad]!
    }

    type Mutation {
        addSquad(title: String!, game: String!, platform: String!, isRanked: Boolean!, isCasual: Boolean!): Squad
        addUserToSquad(squadId: ID!, username: String!): Squad
        removeSquad(squadId: ID!): Squad
        removeUser(squadId: ID!, username: String!): Squad
    }
`;

module.exports = typeDefs;