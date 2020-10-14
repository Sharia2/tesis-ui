import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, Footer, Home, Heatmap } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://deploytesis.herokuapp.com/medicion").then(response => response.json()).then(response => {
      if (Array.isArray(response)) {
        const positions = response.map(element => {
          const latitud1 = Number(element.latitud.split('-')[0])
          const latitud2 = Number(element.latitud.split('-')[1])
          const lat = latitud1 + latitud2 / 60
          const longitud1 = Number(element.longitud.split('-')[0])
          const longitud2 = Number(element.longitud.split('-')[1])
          const lng = (longitud1 + longitud2 / 60) * -1
          return {
            lat,
            lng,
          }
        })
        setData({
          rawData: response,
          gpsData: {
            positions,
            options: {
              radius: 20,
              opacity: 1
            }
            
          }
        })
      }
    });
  }, [])
  return (
    <Router>
      <Nav />
      <div className="router-container">
        <Switch>
          <Route path="/Data">
            Data
        </Route>
          <Route path="/GPS">
            <Heatmap
              gpsData={data.gpsData}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
