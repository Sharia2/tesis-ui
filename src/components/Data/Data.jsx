import React, { Component } from 'react';
import {  Modal, Button } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import "./Data.scss"
import gridOptions from "./gridOptions"
import IndicatorCellRenderer from "../IndicatorCellRenderer/IndicatorCellRenderer"
import LedCellRenderer from "../LedCellRenderer/LedCellRenderer"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import 'ag-grid-enterprise';

class Data extends Component {
    state = {
        visible: true
    }

    handleOk = () => { this.setState({ visible: false }) };

    render() {
        const { visible} = this.state;
        const { handleOk } = this
        const {data} = this.props;
        const { masterDetail, columnDefs, defaultColDef, detailCellRendererParams, getDetailRowData, enableRangeSelection, enableCharts, animateRows} = gridOptions
        const dataArray = Object.values(data);
        return (
            <div className="ag-theme-alpine" style={{ width: '100%', height: '100%' }}>
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
                    <p>A continuación se presenta una tabla con todos los datos recolectados separados por columnas </p>
                    <strong>Temperatura corporal</strong><p> En esta columna por medio de un led se indica el estado de la variable con ayuda de los colores rojo, amarillo y verde.</p>
                    <strong>Estrés térmico</strong><p>Para esta columna se calculó el índice de temperatura y humedad (ITH) para identificar el nivel de estrés térmico en el bovino, el cual se puede visualizar por medio del nivel de la barra, color y mensaje de alerta. </p>
                    <strong>Generacion de gráficas</strong><p>Al seleccionar las columnas y presionar click derecho se despliega un menú, donde la opción <span style={{fontWeight: "bold"}}>Chart Range </span> presenta la variedad de gráficas que se pueden generar y a su vez modificar como lo desee. </p>
                </Modal>
                <AgGridReact
                    masterDetail={masterDetail}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    detailCellRendererParams={detailCellRendererParams}
                    getDetailRowData={getDetailRowData}
                    rowData={dataArray}
                    enableRangeSelection={enableRangeSelection}
                    enableCharts={enableCharts}
                    animateRows={animateRows}
                    frameworkComponents={{indicatorCellRenderer : IndicatorCellRenderer, ledCellRenderer : LedCellRenderer}}
                />
            </div>
        )
    }
}

export default Data;