import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import "./Pin.scss"

const Pin = ({ temperaturaAmbiente, temperaturaCorporal, humedad, id}) => {
    let puntos = 0
    if (temperaturaAmbiente < 25 || temperaturaAmbiente > 30){
        puntos++
    }
    if (temperaturaCorporal < 38 || temperaturaCorporal > 40){
        puntos++
    }
    if (humedad < 30 || humedad > 50){
        puntos++
    }
    const color = puntos===0 ? "green" : puntos===1 ? "orange" : "red" ;
    return(
        <div>
            <FontAwesomeIcon icon={faMapPin}  className="pin-container" style={{color}}/>
        </div>
    )
}

export default Pin;