import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerThreeQuarters, faCloudSun, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card } from 'antd';
import { CloudSyncOutlined, BarChartOutlined, EnvironmentOutlined, FileTextOutlined } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";
import image1 from "../../assets/solution1.jpeg"
import image2 from "../../assets/resultados1.png"
import image3 from "../../assets/resultados3.png"
import image4 from "../../assets/resultados2.png"
import image5 from "../../assets/resultados4.png"
import "./Solution.scss"


const Info2 = () => (
    <div className="cards-wrapper-solution">
        <Row>
            <Col span={14} style={{ padding: '10px 40px 0 20px' }}>
                <Card className='cards-up-solution'>
                    <p>Dispositivo diseñado para medir variables fisiológicas y ambientales de un bovino. </p>
                </Card>
                <Row>
                    <Card className='cards-up-solution'>
                        <p>Almacenamiento y visualizacion de datos adquiridos generando alarmas ante posibles anomalías.</p>
                    </Card>
                </Row>
            </Col>
            <Col span={10}>
                <Card cover={<img src={image1} alt="this images is not found" className="image" ></img>} className="">
                    <Meta title="Dispositivo" />
                </Card>
            </Col>
        </Row>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={<FontAwesomeIcon icon={faCloudSun} className="icons" style={{ color: 'orange' }} />} bordered={false} className="cards-down-solution">
                        <p>Sensor utilizado para la medición de  temperatura y humedad relativa del ambiente DHT22</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={<FontAwesomeIcon icon={faThermometerThreeQuarters} className="icons" style={{ color: 'purple' }} />} bordered={false} className="cards-down-solution">
                        <p>Medición temperatura corporal LM75A</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={< CloudSyncOutlined className="icons" style={{ color: "blue" }} />} bordered={false} className="cards-down-solution">
                        <p>Conexión base de datos</p>
                        <p>Software Heroku -- MongoDB</p>
                        <p>Parte física M95</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={<FileTextOutlined className="icons" style={{ color: "black" }} />} bordered={false} className="cards-down-solution">
                        <p>Almacenamiento y visualizacion de datos recolectados</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={<BarChartOutlined className="icons" style={{ color: "green" }} />} bordered={false} className="cards-down-solution">
                        <p>Posibilidad de generar diferentes tipos de gráficas según la necesidad</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={<EnvironmentOutlined className="icons" style={{ color: "red" }} />} bordered={false} className="cards-down-solution">
                        <p>Visualización de ubicación y variables de la última medición </p>
                    </Card>
                </Col>
            </Row>
        </div>
        <div className="middle-title">
            <Row>
                <Col span={24}>
                    <h1>FUNCIONALIDADES</h1>
                </Col>
            </Row>
        </div>
        <div className="final-cards">
            <Row gutter={10}>
                <Col span={12}>
                    <Card title="Generar mapas de calor" className="cards-explanation1">
                        <p>Podrás visualizar mapas de calor por cada bovino dentro de la base de datos seleccionando el id, identificando los lugares mas frecuentados por el este</p>
                        <img src={image2} alt="this images is not found" className="image" ></img>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Ubicar posición actual"  className="cards-explanation2">
                        <p>Por medio de pines se podrá ubicar la última posición del bovino dentro del terreno, además depediendo del color determinar el estado del animal. </p>
                        <img src={image3} alt="this images is not found" className="image" ></img>
                    </Card>
                </Col>
            </Row>
        </div>
        <div className="final-cards">
            <Row gutter={10}>
                <Col span={12}>
                    <Card title="Consultar los datos" className="cards-explanation3">
                        <p>Con ayuda de una tabla se agrupa la información recolectada por bovino, permitiendo mejor representación de los datos  </p>
                        <img src={image4} alt="this images is not found" className="image" ></img>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Generación de gráficas" className="cards-explanation3">
                        <p>Teniendo en cuenta los datos que desee comparar, podrás generar gráficas seleccionando los valores deseados</p>
                        <img src={image5} alt="this images is not found" className="image" ></img>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

export default Info2;