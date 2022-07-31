import { gql } from '@apollo/client';

export const GET_SQUADS = gql`
  query Squads {
    squads {
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
`;
