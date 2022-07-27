import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../Cards'

const valorant = 'https://i.imgur.com/R7y3MEP.png'
const lol = 'https://i.imgur.com/ICsy5Dc.png'
const apex = 'https://i.imgur.com/nTYou5s.png'
const fortnite = 'https://i.imgur.com/wF3u83J.png'
const overwatch = 'https://i.imgur.com/CKucI2C.png'

const squads = () => {
let projects = [{
  title:'VALORANT',
  gitHub:'https://github.com/modjeska/yana-lavender',
  deployment:'https://modjeska.github.io/yana-lavender/',
  image: valorant,
  desc: 'Looking for 5 man LMK',
  date: '7-26-22',
},
{
  title:'League Of Legends',
  gitHub:'https://github.com/modjeska/rumero-blue',
  deployment:'https://note-taker-modjeska.herokuapp.com/',
  image: lol,
  desc: 'Looking for aram players!',
  date: '7-26-22',
},
{
  title:'Apex Legends',
  gitHub:'https://github.com/modjeska/future-ice',
  deployment:'https://modjeska.github.io/future-ice/',
  image: apex,
  desc: 'Anyone down for some arenas?',
  date: '7-26-22',
},
{
  title:'Fortnite',
  gitHub:'https://github.com/DesertCow/DinnerWithSchmucks',
  deployment:'https://desertcow.github.io/DinnerWithSchmucks/',
  image: fortnite,
  desc: 'Looking for 2',
  date: '7-30-22',
},
{
  title:'Overwatch',
  gitHub:'https://github.com/Godoflaugh/OG-Pokemon-Cards',
  deployment:'https://github.com/Godoflaugh/OG-Pokemon-Cards',
  image: overwatch,
  desc: 'Anyone down to play tomorrow?',
  date: '7-27-22',
}]

  return (
    <>
    <Grid container justifyContent="center" className="">
      <h1>AVAILABLE SQUADS</h1>
    </Grid>
    <Grid container spacing={6} padding={2} justifyContent="center">
      {projects.map(project => 
        <Grid item>
          <Card 
          desc={project.desc} 
          title={project.title} 
          github={project.gitHub} 
          deployment={project.deployment} 
          image={project.image} 
          date={project.date} 
          ></Card>
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default squads