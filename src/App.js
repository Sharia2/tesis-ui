import React from 'react';
import './App.css';
import { Nav, Footer, Home } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/Data">
          Data
        </Route>
        <Route path="/GPS">
          GPS
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
