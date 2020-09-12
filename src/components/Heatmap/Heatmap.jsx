import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import "./Heatmap.scss"

//AIzaSyDKqrFi2AW-g2mduIrTL3v4xL2Enc3X6aM

class Heatmap extends Component {
    state = {
        active: 0,
        center: { lat: 40.73, lng: -73.93 },
    };
    static defaultProps = {
        center: { lat: 40.73, lng: -73.93 },
        zoom: 12
    };
    changeActive = (newActive) => { this.setState({ active: newActive }) };
    render() {
        const { active, center } = this.state
        const { changeActive } = this
        return (
            <div className="gps-container">
                <div className="options-container">
                    <div className="options">
                        <button className={active === 0 ? 'active' : ''} onClick={() => { changeActive(0) }}>Posición</button>
                        <button className={active === 1 ? 'active' : ''} onClick={() => { changeActive(1) }}>Humedad</button>
                        <button className={active === 2 ? 'active' : ''} onClick={() => { changeActive(2) }}>Temperatura</button>
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
                    />
                </div>
            </div>
        )
    }
}

export default Heatmap;