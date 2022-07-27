import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './card.css'

const MediaCard = ({github, deployment, title, image, desc, date, pc, playstation, xbox}) => {
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
          {desc}
        </Typography>
        <Typography className="grid" variant="body2" color="text.secondary">
          Date: {date}
        </Typography>
      </CardContent>
      <CardActions className="buttons">
        <Button size="small">JOIN</Button>
        <Button size="small">Deployment</Button>
      </CardActions>
    </Card>
    </Grid>
    </Box>
    </>
  );
}

export default MediaCard