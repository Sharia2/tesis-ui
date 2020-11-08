import React, { Component } from 'react';
import {  Modal, Button } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import "./Data.scss"
import gridOptions from "./gridOptions"
import IndicatorCellRenderer from "../IndicatorCellRenderer/IndicatorCellRenderer"

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
        console.log(masterDetail, columnDefs, defaultColDef, detailCellRendererParams, getDetailRowData, dataArray);
        return (
            <div className="ag-theme-alpine" style={{ width: '100%', height: '100%' }}>
                <Modal
                    visible={visible}
                    title="Información"
                    onCancel={handleOk}
                    footer={[
                        <Button onClick={handleOk}>
                            Cerrar
                    </Button>
                    ]}
                >
                    <p>kjdxnsaklnaklcnaskl</p>
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
                    frameworkComponents={{indicatorCellRenderer : IndicatorCellRenderer}}
                />
            </div>
        )
    }
}

export default Data;