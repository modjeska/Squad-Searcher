import React from 'react'
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub'
import './footer.css'

const footer = () => {
  return (
    <>
    <Grid container className="footer" justifyContent="center" spacing={2} padding={2}>
        <Grid item>
            <a className="links" href="https://github.com/modjeska/Squad-Searcher" rel="noreferrer" target="_blank">
            <GitHubIcon></GitHubIcon>
            </a>
        </Grid>
    </Grid>
    </>
  )
}

export default footer