import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation Mutation($username: String!, $password: String!) {
    signUp(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Mutation($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER_TO_SQUAD = gql`
  mutation Mutation($squadId: ID!) {
    addUserToSquad(squadId: $squadId) {
      _id
      title
      game
      platform
      isRanked
      isCasual
      users {
        _id
        username
      }
    }
  }
`

export const REMOVE_USER_TO_SQUAD = gql`
  mutation Mutation($squadId: ID!) {
    removeUserFromSquad(squadId: $squadId) {
      _id
      title
      game
      platform
      isRanked
      isCasual
      users {
        _id
        username
      }
    }
}
`
