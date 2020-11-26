import React from "react";
import { Row, Col, Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import Meta from "antd/lib/card/Meta";
import image1 from "../../assets/introduction1.jpg"
import "./Introduction.scss"


const Introduction = () => (   
        <>
        <Row>
            <Col span={14} style={{ padding: '10px 50px 0 20px'}}>
                <Card title="Aporte en la economía" extra={<RiseOutlined />} style={{ width: '100%' }} vlass>
                    <p>El sector ganadero a lo largo de los años se ha posicionado como uno de los sectores con mayor importancia en la economía nacional, tanto por su aporte en el sector alimenticio, generación de empleos e ingresos en familias rurales; por lo cual a lo largo de los años se ha buscado la manera más eficiente de mejorar el monitoreo de los bovinos, para evitar pérdidas y optimizar la producción.</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ width: 300 }}
                    cover={<img src={image1} alt="this images is not found"></img>}
                >
                    <Meta description="http://www.fao.org/in-action/agronoticias/detail/es/c/506019/" style={{fontSize: "10px"}} />
                </Card>
            </Col>
        </Row>
        </>
);

export default Introduction;