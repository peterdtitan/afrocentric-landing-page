import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion'; 
import { NavBar, Hero, MainContainer, Services, Footer} from "./components";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar />
      <Hero />
      <MainContainer />
      <Services />
      <Footer />
    
    </AnimatePresence>
  );
}

export default App;
