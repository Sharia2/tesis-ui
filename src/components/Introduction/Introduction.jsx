import React from "react";
import { Row, Col, Card } from 'antd';
import Meta from "antd/lib/card/Meta";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTractor, faShip, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import image1 from "../../assets/introduction1.jpg"
import "./Introduction.scss"


const Introduction = () => (
    <>
        <div className="cards-wrapper-introduction">
            <Row>
                <Col span={10}>
                    <Card cover={<img src={image1} alt="this images is not found" className="image" ></img>} className="card-image-economy">
                        <Meta description="http://www.fao.org/in-action/agronoticias/detail/es/c/506019/" style={{ fontSize: "10px" }} />
                    </Card>
                </Col>
                <Col span={14} style={{ padding: '10px 20px 0 50px' }}>
                    <Card className='cards-up-introduction'>
                        <p>Segun el instituto Colombiano agropecuario, hay aproximadamente 27.234.027 de bovinos repartidos en 623.794 predios.</p>
                    </Card>
                    <Row>
                        <Card className='cards-up-introduction'>
                            <p>La ganadería contribuye con:</p>
                            <p>- 1.4% del PIB nacional</p>
                            <p>- 48.7% del PIB pecuario</p>
                            <p>- 21.8% del PIB agropecuario</p>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='cards-up-introduction'>
                            <p>Hay ganadería en todas las regiones, en todos los climas, en todos los tamaños y en diversas especialidades.</p>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={8}>
                    <Card className="cards-down">
                        <FontAwesomeIcon icon={faShip} className="icons" style={{ color: 'blue' }} />
                        <p>
                            Los destinos más importantes de carne bovina exportada en el primer bimestre del 2020 fueron: Líbano con 1.210 toneladas, Jordania con 758 toneladas, Hong Kong con 578 toneladas y Egipto con 574
                        </p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="cards-down">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="icons" style={{ color: 'green' }} />
                        <p>La ganadería genera 810 mil empleos directos que representan:</p>
                        <p className="seccion-p">-El 6% del empleo nacional</p>
                        <p className="seccion-p">-El 19% del empleo agropecuario</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="cards-down">
                        <FontAwesomeIcon icon={faTractor} className="icons" style={{ color: 'red' }} />
                        <p>Debido a la ubicación geográfica de Colombia y la variedad de sus pisos térmicos, desde el nivel del mar hasta los páramos, es permitido trabajar con diversas razas de bovinos.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    </>
);

export default Introduction;