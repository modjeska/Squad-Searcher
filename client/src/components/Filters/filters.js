import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './filters.css'

const options = ['XBOX', 'PLAYSTATION', 'PC'];


const squadNavigator = () => {
  return (
    <>
    <Grid container justifyContent="center" className="">
      <h1>FILTERS</h1>
    </Grid>
    <Box>
      <Grid className="filters" direction="column" justifyContent="center" container padding={2} spacing={2} alignItems="center">
          <Grid className="main-navbar" justifyContent="center" direction="row" container xs={12} md={3}>
               <Button textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>PLATFORM</Button>
               <Button textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>GAME</Button>
               <Button textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>RANKED</Button>
               <Button textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>CASUAL</Button>
          </Grid>
          <Grid item md={1}></Grid>
      </Grid>
    </Box>
    </>
  )
}

export default squadNavigator