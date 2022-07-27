import React from 'react'
import Grid from '@mui/material/Grid';
import me from '../../assets/images/me.png'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './filters.css'

const options = ['XBOX', 'PLAYSTATION', 'PC'];


const squadNavigator = () => {
  return (
    <>
    <Box>
      <Grid className="filters" direction="column" justifyContent="center" container padding={2} spacing={2} alignItems="center">
          <Grid className="main-navbar" justifyContent="center" direction="row" container xs={12} md={3}>
               <Button textAlign="center" sx={{my: 2, color: 'white', display: 'block' }}>CREATE SQUAD</Button>
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