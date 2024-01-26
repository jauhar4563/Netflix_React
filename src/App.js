import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import RowPost from './components/rowpost/rowpost'
import {originals,action} from './urls'

function App() {
  useEffect(()=>{

  },[])
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
