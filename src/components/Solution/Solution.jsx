import React from "react";
import image5 from "../../assets/3.jpg"
import "./Solution.scss"


const Info2 = () => (
    <div className="solution-container">
        <div className="information-solution-container">
            <p className="title">ESTRÉS TÉRMICO</p>
            <p className="body">El término “estrés térmico” se utiliza para describir la situación que les ocurre a los animales cuando el calor generado por su organismo, sumado al calor absorbido del ambiente, es mayor que su capacidad para disiparlo.</p>
            <p className="body">La estabilidad de la temperatura corporal se basa en las permutas de calor con el medio ambiente, que, a su vez, dependen de mecanismos psiológicos, comportamentales y metabólicos.</p>
            <p className="body">El ambiente térmico representa un factor de restricción de la ciencia productiva, sobre todo  en  los sistemas  intensivos,  donde los animales frecuentemente no pueden manifestar determinadas respuestas comporta-mentales adaptativas.</p>
        </div>
        <div className="image-container-solution">
            <div className="image5"><img src={image5} alt="this images is not found" /></div>
            {/* <div className="image6"><img src={image6} alt="this images is not found" /></div> */}
            {/* <div className="image7"><img src={image7} alt="this images is not found" /></div>
            <div className="image8"><img src={image8} alt="this images is not found" /></div> */}
        </div>
    </div>
);

export default Info2;