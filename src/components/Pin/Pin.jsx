import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import "./Pin.scss"

const Pin = ({ temperaturaAmbiente, temperaturaCorporal, humedad, id}) => {
    let puntos = 0;
    if (temperaturaAmbiente <= 17 || temperaturaAmbiente >= 28){
        puntos++
    }
    if (temperaturaCorporal < 36 || temperaturaCorporal > 37){
        puntos++
    }
    if (humedad <= 50 || humedad >= 70){
        puntos++
    }
    const color = puntos === 0 ? "#40AB2A" : puntos===1 ? "orange" : "red" ;
    return(
        <div>
            <FontAwesomeIcon icon={faMapPin}  className="pin-container" style={{color}}/>
        </div>
    )
}

export default Pin;