import * as React from 'react';
import './navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const ResponsiveAppBar = ({pageState, setPageState}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleOpenLogin = () => {
    setPageState({...pageState, assemble: false, create: false, login: true, squads: false, filters: false, contact: false,})
  }

  const handleOpenSquads = () => {
    setPageState({...pageState, assemble: false, create: false, login: false, squads: true, filters: true, contact: false,})
  }
  
  const handleOpenContact = () => {
    setPageState({...pageState, assemble: false, create: false, login: false, squads: false, filters: false, contact: true,})
  }

  const handleOpenCreate = () => {
    setPageState({...pageState, assemble: false, create: true, login: false, squads: false, filters: false, contact: false,})
  }

  const handleOpenAssemble = () => {
    setPageState({...pageState, assemble: true, create: false, login: false, squads: false, filters: false, contact: false,})
  }

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
           >
            
          </Typography>

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
                <MenuItem onClick={handleOpenLogin}>
                  <Typography textAlign="center">LOGIN</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenCreate}>
                  <Typography textAlign="center">SIGN UP</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenSquads}>
                  <Typography textAlign="center">FIND SQUAD</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenContact}>
                  <Typography textAlign="center">JOINED SQUADS</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenAssemble}>
                  <Typography textAlign="center">CREATE SQUAD</Typography>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button

                onClick={handleOpenLogin}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                LOGIN
              </Button>
              <Button

                onClick={handleOpenCreate}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                SIGN UP
              </Button>
              <Button

                onClick={handleOpenSquads}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                FIND SQUAD
              </Button>
              <Button

                onClick={handleOpenContact}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                JOINED SQUADS
              </Button>
              <Button

                onClick={handleOpenAssemble}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                CREATE SQUAD
              </Button>

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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;