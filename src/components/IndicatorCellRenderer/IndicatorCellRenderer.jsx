import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Progress } from 'antd';

class IndicatorCellRenderer extends Component {

    constructor(props) {
        super(props)
        console.log('The value is ' , props.data);
    }
    render() {
        const { props } = this
        const { column } = this.props
        
        // if( column.colId === "pinData.temperaturaAmbiente") {
        //     // if( props.value > 24.6){
        //     //     color = "red"
        //     // }
        //     color = props.value
        // }

        return (
            // <FontAwesomeIcon icon={faCircle} style={{ color }}/>
            <Progress percent={props.value} />
        )
    }
}

export default IndicatorCellRenderer;