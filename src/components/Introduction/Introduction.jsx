import React from "react";
import { Row, Col, Card } from 'antd';
import Meta from "antd/lib/card/Meta";
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
                        <p>El sector ganadero a lo largo de los años se ha caracterizado por generar empleos e ingresos a familias rurales </p>
                    </Card>
                    <Row>
                        <Card className='cards-up-introduction'>
                            <p>El sector ganadero a lo largo de los años se ha caracterizado por generar empleos e ingresos a familias rurales </p>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='cards-up-introduction'>
                            <p>El sector ganadero a lo largo de los años se ha caracterizado por generar empleos e ingresos a familias rurales </p>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={8}>
                    <Card className="cards-down">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio ea enim ullam fuga quos quam tenetur aspernatur. Vel, nostrum accusantium maxime possimus alias distinctio tempora magnam mollitia dicta id.</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="cards-down">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio ea enim ullam fuga quos quam tenetur aspernatur. Vel, nostrum accusantium maxime possimus alias distinctio tempora magnam mollitia dicta id.</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="cards-down">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio ea enim ullam fuga quos quam tenetur aspernatur. Vel, nostrum accusantium maxime possimus alias distinctio tempora magnam mollitia dicta id.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    </>
);

export default Introduction;