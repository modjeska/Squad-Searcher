import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Squads from './components/Squads';
import Joined from './components/Joined';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Assemble from './components/Assemble'
import Contact from './components/Contact'

import { getLoggedInUsername } from './utils/auth';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  // uri: '/graphql',
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token && {authorization: token}), // only put auth header if token exists
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // uri: 'localhost:3001', // TODO: CHECK IF THIS IS NEEDED FOR LOCAL
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [loggedInUsername, setLoggedInUsername] = useState(getLoggedInUsername());
  return (
    <ApolloProvider client={client}>
      <Router>
      <CssBaseline>
        {/* <UsernameContext.Provider value={[loggedInUsername, setLoggedInUsername]}/> */}
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar loggedInUsername={loggedInUsername}/>
            <div className="container">
              <Routes>
                <Route 
                  path="/" 
                  element={<Squads />}
                />
                <Route 
                  path="/sign-in" 
                  element={<Login handleLogin={setLoggedInUsername}/>} 
                />
                <Route 
                  path="/sign-up" 
                  element={<SignUp />} 
                />
                <Route 
                  path="/create-squad" 
                  element={<Assemble />} 
                />
                <Route 
                  path="/joined-squads" 
                  element={<Joined />} 
                />
                <Route 
                  path="/contact" 
                  element={<Contact />} 
                />
                {/* <Route 
                  path="/profiles/:profileId" 
                  element={<Profile />} 
                /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        {/* <UsernameContext.Provider/> */}
      </CssBaseline>
      </Router>
    </ApolloProvider>
  );
}

export default App;
