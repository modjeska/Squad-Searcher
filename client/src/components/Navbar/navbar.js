import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import './navbar.css'

const SETTINGS = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = ({pageState, setPageState, loggedInUsername}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Link className="menu-link" to="/sign-in">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link className="menu-link" to="/sign-up">Sign Up</Link>
              </MenuItem>
              <MenuItem>
                <Link className="menu-link" to="/">Find Squad</Link>
              </MenuItem>
              <MenuItem>
                <Link className="menu-link" to="/joined-squads">Joined Squads</Link>
              </MenuItem>
              <MenuItem>
                <Link className="menu-link" to="/create-squad">Create Squad</Link>
              </MenuItem>
              <MenuItem>
                <Link className="menu-link" to="/contact">Contact Us</Link>
              </MenuItem>
            </Menu>
          </Box>
          <SentimentSatisfiedAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box className="box" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {loggedInUsername && <div>Hello, {loggedInUsername}</div>}
            {!loggedInUsername && 
              <Link className="link" to="/sign-in">
                Login
              </Link>
            }
            {!loggedInUsername &&
              <Link className="link" to="/sign-up">
                Sign Up
              </Link>
            }
            <Link className="link" to="/">
              Find Squad
            </Link>
            <Link className="link" to="/joined-squads">
              Joined Squads
            </Link>
            <Link className="link" to="/create-squad">
              Create Squad
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
          >
            {loggedInUsername &&
              SETTINGS.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))
            }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;