import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { Pin } from "../index"
import "./Heatmap.scss"

//AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM

class Heatmap extends Component {
    state = {
        active: "heatmap",
        center: { lat: 40.73, lng: -73.93 },
    };
    static defaultProps = {
        center: { lat: 6.25113, lng: -75.57051166666666 },
        zoom: 16.8
    }; 
    componentDidMount(){     
        const latitud = this.props.gpsData[this.props.gpsData.length -1].lat
        const longitud = this.props.gpsData[this.props.gpsData.length - 1].lng
        this.setState({center: {lat: latitud , lng: longitud}})
    }
    changeActive = (newActive) => { this.setState({ active: newActive }) };
    render() {
        const { active, center } = this.state
        const { changeActive } = this
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
                        defaultCenter={this.props.center}
                        center={this.state.center}
                        defaultZoom={this.props.zoom}
                        onChildMouseEnter={this.onChildMouseEnter}
                        onChildMouseLeave={this.onChildMouseLeave}  
                        heatmapLibrary
                        heatmap={this.props.gpsData[active]}            
                    >
                        <Pin
                        lat = {center.lat}
                        lng = {center.lng}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Heatmap;