import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import FirstSection from './components/FirstSection';
import OurStrategy from './components/OurStrategy';
import OurTeam from './components/OurTeam';
import OurSolution from './components/OurSolution';
import Fooder from './components/Fooder';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <FirstSection />
      <OurStrategy />
      <OurTeam />
      <OurSolution />
      <Fooder />       
    </div>
  );
}

export default App;
