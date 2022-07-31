import React from 'react'
import { useQuery, useLazyQuery } from '@apollo/client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import SquadCard from '../Cards/SquadCard'
import { GET_SQUADS } from '../../utils/queries';

import './filters.css'

const GAME_IMAGES = {
 valorant : 'https://i.imgur.com/R7y3MEP.png',
 league_of_legends : 'https://i.imgur.com/ICsy5Dc.png',
 apex_legends : 'https://i.imgur.com/nTYou5s.png',
 fornite : 'https://i.imgur.com/wF3u83J.png',
 overwatch : 'https://i.imgur.com/CKucI2C.png',
}

const Squads = () => {
  const { loading, data } = useQuery(GET_SQUADS);
  const [lazyLoad, { loading: lazyLoading, data: lazyData }] = useLazyQuery(GET_SQUADS);

  if (lazyLoading || loading){
    return <div>Loading...</div>
  }

  const squads = lazyData?.squads || data?.squads;

  return (
    <>
    <Grid container justifyContent="center">
      <h1>FILTERS</h1>
    </Grid>
    <Box>
      <Grid className="filters" direction="column" justifyContent="center" container padding={2} spacing={2} alignItems="center">
          <Grid className="main-navbar" justifyContent="center" direction="row" container xs={12} md={3}>
               <Button id="platformFilter" textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>PLATFORM</Button>
               <Button id="gameFilter" textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>GAME</Button>
               <Button id="rankedFilter" textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>RANKED</Button>
               <Button id="casualFilter" textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>CASUAL</Button>
          </Grid>
          <Grid item md={1}></Grid>
      </Grid>
    </Box>
    <Grid container justifyContent="center">
      <h1>AVAILABLE SQUADS</h1>
    </Grid>
    <Grid container spacing={6} padding={2} justifyContent="center">
      {squads.map(({_id, title, game, platform, isCasual, isRanked, users }) => 
        <Grid key={_id} item>
          <SquadCard 
            squadId={_id}
            title={title}
            game={game}
            platform={platform}
            isCasual={isCasual}
            isRanked={isRanked}
            users={users}
            image={GAME_IMAGES[game]} 
            lazyLoad={lazyLoad}
          />
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default Squads