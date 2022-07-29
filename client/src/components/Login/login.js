import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import './login.css'

const login = () => {
  return (
    <>
     <CssVarsProvider>
      <Sheet sx={{
    maxWidth: 400,
    mx: 'auto', // margin left & right
    my: 4, // margin top & botom
    py: 3, // padding top & bottom
    px: 2, // padding left & right
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
    }}
    variant="outlined">
      <div>
        <Typography level="h4" component="h1">
          <b>Find Your Squad Today!</b>
        </Typography>
        <Typography level="body2">Sign in to continue</Typography>
      </div>
      <TextField
        id="username"
        // html input attribute
        name="username"
        type="username"
        placeholder="username"
        // pass down to FormLabel as children
        label="Username"
    />
    <TextField
        id="password"
        name="password"
        type="password"
        placeholder="password"
        label="Password"
      />
     <Button
      className="but"
       sx={{
         mt: 1, // margin top
        }}
      >
       Log in
      </Button>
      <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{ alignSelf: 'center' }}
      >
        Don't have an account?
      </Typography>
    </Sheet>
    </CssVarsProvider>
    </>
  )
}

export default login