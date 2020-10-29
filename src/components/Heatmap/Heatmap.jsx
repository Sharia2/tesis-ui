import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { Pin } from "../index"
import "./Heatmap.scss"
import PinInfo from "../PinInfo/PinInfo";

//AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM

class Heatmap extends Component {
    state = {
        active: "pines",
        center: { lat: 6.25113, lng: -75.57051166666666 },
        defaultHeatmapData: {positions:[], options:{opacity:0,radius:0}},
        pinInfoProps: {},
        hover: false,
        selectedId: null
    };
    // componentDidMount() {
    //     const { gpsData } = this.props
    //     const selectedId = Object.keys(gpsData)[0]
    //     console.log(Object.keys(gpsData));
    //     this.setState({ selectedId })
    // }
    changeActive = (newActive) => { this.setState({ active: newActive, selectedId: null }) };
    onChildMouseEnter = (num, childProps) => { this.setState({ pinInfoProps: childProps, hover: true }) }
    onChildMouseLeave = (num, childProps) => { this.setState({ pinInfoProps: {}, hover: false }) }

    render() {
        const { gpsData } = this.props
        const { active, center, pinInfoProps, hover, selectedId, defaultHeatmapData } = this.state
        const { changeActive, onChildMouseEnter, onChildMouseLeave } = this
        const selectedHeatmapData = selectedId ? gpsData[selectedId].heatmapData : defaultHeatmapData
        return (
            <div className="gps-container">
                <div className="options-container">
                    <div className="options">
                        <button className={active === "pines" ? 'active' : ''} onClick={() => { changeActive("pines") }}>Estado actual</button>
                        <button className={active === "heatmap" ? 'active' : ''} onClick={() => { changeActive("heatmap") }}>Mapa de calor</button>
                        <button onClick={() => this.setState({ selectedId: '103' })}> select 102 </button>
                        <button onClick={() => this.setState({ selectedId: null })}> select default </button>
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
                        {Object.keys(gpsData).map(id =>
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