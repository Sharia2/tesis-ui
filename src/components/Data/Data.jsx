import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "./Data.scss"
import gridOptions from "./gridOptions"

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import 'ag-grid-enterprise';

class Data extends Component {
    render() {
        const {data} = this.props;
        const { masterDetail, columnDefs, defaultColDef, detailCellRendererParams, getDetailRowData, enableRangeSelection, enableCharts, animateRows} = gridOptions
        const dataArray = Object.values(data);
        console.log(masterDetail, columnDefs, defaultColDef, detailCellRendererParams, getDetailRowData, dataArray);
        return (
            <div className="ag-theme-alpine" style={{ width: '100%', height: '100%' }}>
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
                />
            </div>
        )
    }
}

export default Data;