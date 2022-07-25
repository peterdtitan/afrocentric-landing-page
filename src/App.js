import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion'; 
import { NavBar, Hero, MainContainer} from "./components";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar />
      <Hero />
      <MainContainer />
    
    </AnimatePresence>
  );
}

export default App;
