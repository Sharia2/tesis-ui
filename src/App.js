import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, Footer, Home, Heatmap } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://deploytesis.herokuapp.com/medicion").then(response=>response.json()).then(response => {
      if(Array.isArray(response)){
      const gpsData = response.map(element => {
        const latitud1 = Number(element.latitud.split('-')[0])
        const latitud2 = Number(element.latitud.split('-')[1])
        const latitud = latitud1+latitud2/60
        const longitud1 = Number(element.longitud.split('-')[0])
        const longitud2 = Number(element.longitud.split('-')[1])
        const longitud = longitud1 + longitud2 / 60
        return {
          latitud ,
          longitud,
          hemisferioLatitud: element.hemisferioLatitud,
          hemisferioLongitud: element.hemisferioLongitud
        }
      })
      console.log(gpsData)
      setData({
        rawData: response,
        gpsData
      })}
    });
  }, [])
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Data">
          Data
        </Route>
        <Route path="/GPS">
          <Heatmap
        
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
