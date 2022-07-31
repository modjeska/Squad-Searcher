import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './assembly.css'

function exportValues() {
  console.log('hello')
}

const options = ['Valorant', 'League of Legends', 'Apex Legends', 'Fortnite', 'Overwatch'];

export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <Grid container justifyContent="center">
      <h1>CREATE A SQUAD</h1>
    </Grid>


    <Box className="createSquadArea">
    <div className="boxTitle"><h3>Please select from the following options</h3></div>
    
    <div className="option">
      <h4>Enter a date/time:</h4>
      <TextField
            label="June 22nd 4:30PM"
            multiline
            name="bio"
            id="bio"
      />
    </div>

    <div className="option">
      <h4>Enter a short description of your squad:</h4>
      <TextField
            label="Down for ranked?"
            multiline
            name="bio"
            id="bio"
      />
    </div>

    <div className="option">
      <h4>How many players are you looking for?</h4>
      <TextField
            label="Looking for 2"
            multiline
            name="bio"
            id="bio"
      />
    </div>


    <Box className="option">
      <h4>Which platforms can play?</h4>
    <FormGroup>
      <FormControlLabel id="pc" control={<Checkbox color="default"/>} label="PC" />
      <FormControlLabel id="xbox" control={<Checkbox color="success"/>} label="Xbox" />
      <FormControlLabel id="playstation" control={<Checkbox />} label="Playstation" />
    </FormGroup>
    </Box>


    <div className="option">
    <React.Fragment>
    <div>
      <h4>Which game are you playing?</h4>
    </div>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button id="gameButton">{options[selectedIndex]}</Button>
        <Button
          id="gameButton"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="gameButton">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
    </div>


    <Grid container justifyContent="center">
        <Grid item>
            <Button onClick={exportValues} id="createButton">Submit</Button>
        </Grid>
    </Grid>
    </Box>
    </>
  );
}
