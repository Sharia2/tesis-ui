import React  from "react";
import image1 from "../../assets/stress1.jpg"
import image2 from "../../assets/stress2.jpg"
import image3 from "../../assets/stress3.jpg"
import image4 from "../../assets/stress4.jpg"
import "./Stress.scss"


const Info1 = () => (
    <div className="stress-container">
        <div className="information-container">
            <p className="title">ESTRÉS TÉRMICO</p>
            <p className="body">El término “estrés térmico” se utiliza para describir la situación que les ocurre a los animales cuando el calor generado por su organismo, sumado al calor absorbido del ambiente, es mayor que su capacidad para disiparlo.</p>
            <p className="body">La estabilidad de la temperatura corporal se basa en las permutas de calor con el medio ambiente, que, a su vez, dependen de mecanismos psiológicos, comportamentales y metabólicos.</p>
            <p className="body">El ambiente térmico representa un factor de restricción de la ciencia productiva, sobre todo  en  los sistemas  intensivos,  donde los animales frecuentemente no pueden manifestar determinadas respuestas comporta-mentales adaptativas.</p>
        </div>
        <div className="image-container">
            <div className="box2 image1"><img src={image1} alt="this images is not found" /></div>
            <div className="box2 image2"><img src={image2} alt="this images is not found" /></div>
            <div className="box2 image3"><img src={image3} alt="this images is not found" /></div>
            <div className="box2 image4"><img src={image4} alt="this images is not found" /></div>
        </div>
    </div>
);

export default Info1;