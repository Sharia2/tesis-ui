import React, { useEffect, useState } from 'react';
import './App.css';
import { Spin } from 'antd';
import { Nav, Footer, Home, Heatmap, Data } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://deploytesis.herokuapp.com/medicion").then(response => response.json()).then(response => {      
      Object.keys(response).forEach(key => {        
        response[key] = { 
          heatmapData : {
            positions: response[key].map(element => {
              // procesamiento coordenadas 
              const latitud1 = Number(element.latitud.split('-')[0])
              const latitud2 = Number(element.latitud.split('-')[1])
              const lat = latitud1 + latitud2 / 60
              const longitud1 = Number(element.longitud.split('-')[0])
              const longitud2 = Number(element.longitud.split('-')[1])
              const lng = (longitud1 + longitud2 / 60) * -1
              // procesamiento fecha 
              const [dia, mes, año, hora] = element.fecha.split("-")
              const fecha = new Date(`${mes}-${dia}-${año}-${hora}`)
              fecha.setHours(fecha.getHours() - 5)
              // procesamiento temperaturas y humedad 
              const temperaturaAmbiente = Number(element.temperaturaAmbiente) / 10
              const humedad = Number(element.humedad) / 10
              const temperaturaCorporal = Number(element.temperaturaCorporal) / 10
              return {
                lat,
                lng,
                fecha,
                temperaturaAmbiente,
                temperaturaCorporal,
                humedad,
                id: element.id
              }
            }),
            options : {
              radius : 20,
              opacity : 20
            }
          }
      }
      } );
      Object.keys(response).forEach(key => {
        response[key].pinData = response[key].heatmapData.positions[response[key].heatmapData.positions.length - 1]
      })      
      setData(response)
    });
  }, [])
  if(!data){
    return (
      <div className="spin-container">
        <Spin size="large" />
      </div>
    )
  }
  return (
    <Router>
      <Nav />
      <div className="router-container">
        <Switch>
          <Route path="/Data">
            <Data
              data={data}
            />
        </Route>
          <Route path="/GPS">
            <Heatmap
              gpsData={data}
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
