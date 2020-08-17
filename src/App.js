import React from 'react';
import './App.css';
import { Nav, Footer } from "./components"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav/>
      <Footer/>
    </Router>
  );
}

export default App;
