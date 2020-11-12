import React, { Component } from "react";
import { Progress } from 'antd';
import './IndicatorCellRenderer.scss'


class IndicatorCellRenderer extends Component {
    render() {
        const { data: {temperaturaAmbiente: temperaturaAmbienteChildren, humedad:humedadChildren,  pinData } } = this.props
        const temperaturaAmbiente = pinData ? pinData.temperaturaAmbiente : temperaturaAmbienteChildren
        const humedad = pinData ? pinData.humedad : humedadChildren
        let color = '#E13030';
        let message = 'Emergencia';
        const ith = (1.8 * temperaturaAmbiente + 32) - (0.55 - 0.55 * humedad / 100) * (1.8 * temperaturaAmbiente - 26);
        const percent = (20 * ith - 1300) / 7
            if( ith < 75){
                color = '#40AB2A';
                message = "Normal";
            } else if(ith<79){
                color = '#FFD933'
                message = "Alerta";
            } else if (ith < 83) {
                color = '#EC7E1D'
                message = "Peligro";
            }
        return (
            <div>
                <Progress percent={percent} showInfo={false} type="line" strokeColor={color} className="progress-bar" />
                <span>{message}</span>
            </div>
        )
    }
}

export default IndicatorCellRenderer;