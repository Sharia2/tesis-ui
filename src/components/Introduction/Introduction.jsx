import React from "react";
import "./Introduction.scss"


const Introduction = () => (
    <div className="introduction-container">
        <div className="information-introduction-container">
            <p className="title">Introducción</p>
            <p className="body">El sector ganadero a lo largo de los años se ha posicionado como uno de los sectores con mayor importancia en la economía nacional, tanto por su aporte en el sector alimenticio, generación de empleos e ingresos en familias rurales; por lo cual a lo largo de los años se ha buscado la manera más eficiente de mejorar el monitoreo de los bovinos, para evitar pérdidas y optimizar la producción. </p>
            <p></p>
            <p className="body">La implementación de sistemas de monitoreo electrónico se ha convertido en una herramienta de apoyo sumamente importante para la administración de los datos más relevantes sobre el cuidado de un hato de bovinos, logrando así llevar un proceso controlado desde cría del animal hasta su venta.</p>
            <p></p>
            <p className="body">Los bovinos como todos los mamíferos son animales homeotermos, es decir, son capaces de mantener una temperatura corporal constante a través de un proceso termo regulatorio, el cual involucra el flujo de calor mediante cuatro vías básicas (conducción, convección, radiación y evaporación),  sin embargo, bajo circunstancias muy extremas el animal puede atravesar puntos muy críticos afectando su producción, por lo cual es de vital importancia revisar constantemente su estado.</p>
            <p></p>
            <p className="body">En el presente trabajo se desarrolló un sistema que permite almacenar en una base de datos la información recolectada por los sensores del dispositivo: temperatura del bovino, posición, humedad y temperatura del ambiente. Estas permiten determinar el estado del hato bovino y como se ve afectado su comportamiento al transcurrir el día; además, con ayuda de mapas de calor se pueden identificar los lugares del terreno mas frecuentados por el ganado y así tomar decisiones respecto a zonas de alimentación o modificación de estas.</p>
        </div>
        <div className="image-container-introduction">
        </div>
    </div>
);

export default Introduction;