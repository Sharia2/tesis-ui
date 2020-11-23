import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './LedCellRenderer.scss'

class LedCellRenderer extends Component {
    render() {
        const {  value } = this.props
        let color = '#E13030';
        if (value>38 && value<39.5) {
            color = "#38D234";
        } else if ( (value>37.5 && value<38) || (value>39.5 && value<40.2)) {
            color = '#FFD933'
        }
        return (
            <span>
                <FontAwesomeIcon icon={faCircle}  style={{ color }} className="led"/>
                {value}
            </span>
        )
    }
}

export default LedCellRenderer;