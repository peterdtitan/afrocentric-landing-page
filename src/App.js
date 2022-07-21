import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion'; 
import { Header, MainContainer } from "./components";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Header />
      <MainContainer />
    
    </AnimatePresence>
  );
}

export default App;
