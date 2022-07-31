import React, { useState  } from 'react';
import { useMutation } from '@apollo/client';

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

import { SIGN_IN } from '../../utils/mutations';
import { storeJwtToken } from '../../utils/auth';
import './login.css'

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [ signIn ,{ error, loading, data }] = useMutation(SIGN_IN, {
    variables: { username, password }
  });

  if (data) {
    const idToken = data?.signIn.token;
    const username = data?.signIn.user.username;
    storeJwtToken(idToken);
    handleLogin(username); // must be after storing
  }

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
        onChange={(e) => setUsername(e.target.value)}
    />
    <TextField
        id="password"
        name="password"
        type="password"
        placeholder="password"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
     <Button
        className="but"
        onClick={signIn}
        disabled={!username || !password}
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

export default Login