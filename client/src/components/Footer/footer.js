import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './footer.css'

const footer = () => {
  return (
    <>
    <Grid container className="footer" justifyContent="center" spacing={2} padding={2}>
        <Grid item>
            <a className="links" href="https://github.com/modjeska" rel="noreferrer" target="_blank">
            <GitHubIcon></GitHubIcon>
            </a>
            <a className="links" href="mailto:dantestargio@gmail.com" rel="noreferrer" target="_blank">
            <AlternateEmailIcon></AlternateEmailIcon>
            </a>
            <a className="links" href="https://www.linkedin.com/in/dante-stargiotti-6b214523a/" rel="noreferrer" target="_blank">
            <LinkedInIcon></LinkedInIcon>
            </a>
        </Grid>
    </Grid>
    </>
  )
}

export default footer