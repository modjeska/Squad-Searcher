import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Squads from './components/Squads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Create from './components/Create'
import Assemble from './components/Assemble'

function App() {
  const [pageState, setPageState] = useState({
    filters: true,
    squads: true,
    contact: false,
    login: false,
    create: false,
    assemble: false,
  })
 
  return (
    <>
    <CssBaseline/>
    <Navbar pageState={pageState} setPageState={setPageState}/>
    {pageState.filters? <Filters/>: ''}
    {pageState.squads? <Squads/>: ''}
    {pageState.login? <Login/>: ''}
    {pageState.create? <Create/>: ''}
    {pageState.contact? <Contact/>: ''}
    {pageState.assemble? <Assemble/>: ''}
    <Footer/>
    </>
  );
}

export default App;
