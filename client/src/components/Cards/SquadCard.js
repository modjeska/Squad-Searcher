import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { ADD_USER_TO_SQUAD, REMOVE_USER_TO_SQUAD } from '../../utils/mutations';
import { getLoggedInUsername } from '../../utils/auth';

import './card.css'

const SquadCard = ({ squadId, title, game, platform, isCasual, isRanked, users, image, lazyLoad }) => {
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [ join ,{ data: joinData }] = useMutation(ADD_USER_TO_SQUAD, {
    variables: { squadId }
  });

  const [ leave ,{ data: leaveData }] = useMutation(REMOVE_USER_TO_SQUAD, {
    variables: { squadId }
  });

  // Only call lazyload when either data is mutated.
  useEffect(() => {
    lazyLoad();
  }, [joinData, leaveData, lazyLoad])

  const loggedInUsername = getLoggedInUsername();

  useEffect(() => {
    if (users) {
      setAlreadyJoined(users.some(user => user.username === loggedInUsername)); 
    } 
  },[alreadyJoined, loggedInUsername, users]);

  return (
    <>
    <Box className="">
    <Grid> 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="game-image"
      />
      <CardContent className="grid">
        <Typography className="grid" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          {game}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          {platform}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          Ranked: {isRanked ? "Yes" : "No"}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          Casual: {isCasual ? "Yes" : "No"}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          {users.map(({username}) => <div key={username}>{username}</div>)}
        </Typography>
      </CardContent>
      <CardActions className="buttons">
        {alreadyJoined && <Button size="small" onClick={leave}>LEAVE</Button>}
        {!alreadyJoined && <Button size="small" onClick={join}>JOIN</Button>}
      </CardActions>
    </Card>
    </Grid>
    </Box>
    </>
  );
}

export default SquadCard