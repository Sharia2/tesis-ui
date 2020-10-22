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
        pinInfoProps: {},
        hover: false
    }; 
    // componentDidMount(){     
    //     const latitud = this.props.gpsData[this.props.gpsData.length -1].lat
    //     const longitud = this.props.gpsData[this.props.gpsData.length - 1].lng
    //     this.setState({center: {lat: latitud , lng: longitud}})
    // }
    changeActive = (newActive) => { this.setState({ active: newActive }) };
    onChildMouseEnter = (num, childProps) => { this.setState({pinInfoProps:childProps, hover:true})}
    onChildMouseLeave = (num, childProps) => { this.setState({ pinInfoProps: {}, hover: false })}
    render() {
        const { gpsData } = this.props
        const { active, center, pinInfoProps, hover } = this.state
        const { changeActive, onChildMouseEnter, onChildMouseLeave } = this
        return (
            <div className="gps-container">
                <div className="options-container">
                    <div className="options">
                        <button className={active === "heatmap" ? 'active' : ''} onClick={() => { changeActive("heatmap") }}>Mapa de calor</button>
                        <button className={active === "pines" ? 'active' : ''} onClick={() => { changeActive("pines") }}>Estado actual</button>
                    </div>
                </div>
                <div className="heatmap-container">
                    <GoogleMapReact                        
                        bootstrapURLKeys={{
                            key: "AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM",
                            language: 'English'
                        }}
                        defaultCenter={center}
                        center={center}
                        defaultZoom={16}
                        onChildMouseEnter={onChildMouseEnter}
                        onChildMouseLeave={onChildMouseLeave}  
                        heatmapLibrary = {active === "heatmap"}
                        // heatmap={this.props.gpsData[active]}            
                    >
                        {Object.keys(gpsData).map(id => 
                        <Pin
                            {...gpsData[id].pinData}
                        />)}
                        {hover ? <PinInfo {...pinInfoProps}/> : null}
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Heatmap;