import React, { Component } from "react";
import { Select, Modal, Button } from 'antd';
import GoogleMapReact from 'google-map-react';
import { Pin } from "../index"
import "./Heatmap.scss"
import PinInfo from "../PinInfo/PinInfo";

//AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM

class Heatmap extends Component {
    state = {
        active: "pines",
        center: { lat: 6.25113, lng: -75.57051166666666 },
        defaultHeatmapData: { positions: [], options: { opacity: 0, radius: 0 } },
        pinInfoProps: {},
        hover: false,
        selectedId: null,
        visible: true
    };

    handleDropdownChange = (newId) => { this.setState({ selectedId: newId }) };
    changeActive = (newActive) => { this.setState({ active: newActive, selectedId: null }) };
    onChildMouseEnter = (num, childProps) => { this.setState({ pinInfoProps: childProps, hover: true }) };
    onChildMouseLeave = (num, childProps) => { this.setState({ pinInfoProps: {}, hover: false }) };
    handleOk = () => {this.setState({ visible:false })};

    render() {
        const { gpsData } = this.props
        const { active, center, pinInfoProps, hover, selectedId, defaultHeatmapData, visible } = this.state
        const { changeActive, onChildMouseEnter, onChildMouseLeave, handleOk } = this
        const { Option } = Select
        const selectedHeatmapData = selectedId ? gpsData[selectedId].heatmapData : defaultHeatmapData
        return (
            <div className="gps-container">
                <Modal
                    visible={visible}
                    title="INFORMACION"
                    onCancel={handleOk}
                    footer={[
                    <Button onClick={handleOk}>
                        Cerrar
                    </Button>
                    ]}
                >
                    <p>A continuación encontratrá las siguientes opciones</p>
                    <strong>Estado actual</strong><p> Te permite visualizar la posición actual de todos los bovinos que hay registrados en la base de datos por medio de pines, además al poner el cursor sobre cualquiera de estos pines se muestra la informacion de este en tiempo real</p>
                    <strong>Mapa de calor</strong><p> En esta opción es necesario seleccionar por medio del ID el bovino y así poder desplegar el mapa de calor, el cual permite visualizar facilmente los lugares del terreno  mas frecuentados por este</p>
                </Modal>
                <div className="options-container">
                    <div className="options">
                        <button className={active === "pines" ? 'active' : ''} onClick={() => { changeActive("pines") }}>Estado actual</button>
                        <button className={active === "heatmap" ? 'active' : ''} onClick={() => { changeActive("heatmap") }}>Mapa de calor</button>
                        {active === "heatmap" && <div>
                            <Select placeholder="Seleccione un ID" value={selectedId} onChange={this.handleDropdownChange} dropdownClassName="dropDown">
                                {Object.keys(gpsData).map(id =>
                                    <Option value={id} placeholder="Seleccione un ID" >{id}</Option>)}
                            </Select>
                        </div>}
                    </div>
                </div>
                <div className="heatmap-container">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM",
                            language: 'English',
                            libraries: ['visualization']
                        }}
                        defaultCenter={center}
                        center={center}
                        defaultZoom={16}
                        onChildMouseEnter={onChildMouseEnter}
                        onChildMouseLeave={onChildMouseLeave}
                        heatmap={selectedHeatmapData}
                        heatmapLibrary
                    >
                        {active === "pines" && Object.keys(gpsData).map(id =>
                            <Pin
                                {...gpsData[id].pinData}
                            />)}
                        {hover ? <PinInfo {...pinInfoProps} /> : null}
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Heatmap;