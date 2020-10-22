import React from "react";
import "./PinInfo.scss"

const PinInfo = ({temperaturaAmbiente, temperaturaCorporal, humedad, id}) => {
    return (
        <div className="pin-info-container"> 
            <p>ID: {id}</p>
            <p>Temperatura corporal: {temperaturaCorporal}</p>
            <p>Temperatura del ambiente: {temperaturaAmbiente}</p>
            <p>Humedad: {humedad}</p>
        </div>
    )
}

export default PinInfo;