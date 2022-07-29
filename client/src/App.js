import React from 'react';
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
import Create from './components/Create'
import Assemble from './components/Assemble'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <CssBaseline>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Squads />}
              />
              <Route 
                path="/sign-in" 
                element={<Login />} 
              />
              <Route 
                path="/sign-up" 
                element={<Create />} 
              />
              <Route 
                path="/create-squad" 
                element={<Assemble />} 
              />
              <Route 
                path="/joined-squads" 
                element={<Joined />} 
              />
              {/* <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              /> */}
            </Routes>
          </div>
          <Footer />
        </div>
        </CssBaseline>
      </Router>
    </ApolloProvider>
  );
}

export default App;
