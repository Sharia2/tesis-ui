import React from "react";
import { Row, Col, Card } from 'antd';
import Meta from "antd/lib/card/Meta";
import image from "../../assets/stress.png"
import imageE from "../../assets/ecuacion.png"
import "./Stress.scss"


const Info1 = () => (
    <div className="stress-container">
        <div className="initial-cards">
            <Row>
                <Col span={24}>
                    <Card className='cards-up-1'>
                        <p className="body">El término “estrés térmico” se utiliza para describir la situación que les ocurre a los animales cuando el calor generado por su organismo, sumado al calor absorbido del ambiente, es mayor que su capacidad para disiparlo.</p>
                        <p></p>
                        <p className="body">La estabilidad de la temperatura corporal se basa en las permutas de calor con el medio ambiente, que, a su vez, dependen de mecanismos psiológicos, comportamentales y metabólicos.</p>
                        <p></p>
                        <p className="body">El ambiente térmico representa un factor de restricción de la ciencia productiva, sobre todo  en  los sistemas  intensivos,  donde los animales frecuentemente no pueden manifestar determinadas respuestas comporta-mentales adaptativas.</p>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <Card className="card-image-ith">
                        <img src={image} alt="this images is not found" className="image" ></img>
                        <p></p>
                        <Meta description="https://inta.gob.ar/sites/default/files/inta_estres_por_calor_bovinos_para_carne.pdf" style={{ fontSize: "10px" }} />
                    </Card>
                </Col>
                <Col span={14} style={{ padding: '10px 20px 0 50px' }}>
                    <Card className='cards-up'>
                        <p>El valor de ITH obtenido en la fórmula se considera como la intensidad de las condiciones de
                        estrés por calor a la que se encuentra expuesto el animal. Esta intensidad se categoriza en bovinos
                        para carne como alerta (leve) para valores de ITH ≥ 75, peligro (moderado) para valores de ITH ≥ 79
                        o emergencia (severo) cuando se alcanzan valores de ITH ≥ 84</p>
                    </Card>
                    <Row>
                        <Card className='cards-up'>
                            <img src={imageE} alt="this images is not found" className="image" ></img>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <h3 style={{ margin: '20px  0' }} >Las recomendaciones básicas para disminuir las pérdidas asociadas a estrés por calor
                    son asegurar acceso a fuentes de sombra y agua de calidad, en la medida que esto sea posible.
                    </h3>
                </Col>
            </Row>
        </div>
    </div >
);

export default Info1;