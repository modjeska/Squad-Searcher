import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Squads from './components/Squads';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [pageState, setPageState] = useState({
    filters: true,
    squads: true,
    contact: false,
  })
 
  return (
    <>
    <CssBaseline/>
    <Navbar pageState={pageState} setPageState={setPageState}/>
    {pageState.filters? <Filters/>: ''}
    {pageState.squads? <Squads/>: ''}
    {pageState.contact? <Contact/>: ''}
    <Footer/>
    </>
  );
}

export default App;
