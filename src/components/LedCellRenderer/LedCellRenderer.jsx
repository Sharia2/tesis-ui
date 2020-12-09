import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './LedCellRenderer.scss'

class LedCellRenderer extends Component {
    render() {
        const {  value } = this.props
        let color = '#E13030';
        if (value>=36 && value<=37) {
            color = "#40AB2A";
        } else if ( (value>35.3 && value<36) || (value>37 && value<37.7)) {
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