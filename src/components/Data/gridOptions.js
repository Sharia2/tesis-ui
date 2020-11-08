const gridOptions = {
    masterDetail: true,
    animateRows: true,

    columnDefs: [
        { headerName: 'Número de identificación', field: 'pinData.id', cellRenderer: 'agGroupCellRenderer'},
        { headerName: 'Temperatura Corpolar Actual', field: 'pinData.temperaturaCorporal'},
        { headerName: 'Temperatura Ambiente Actual', field: 'pinData.temperaturaAmbiente'},
        { headerName: 'Humedad Actual', field: 'pinData.humedad' },
        { headerName: 'Estres térmico', cellRenderer: 'indicatorCellRenderer' },        
        { headerName: 'Fecha', field: 'pinData.fecha', 
            valueFormatter: function(params){
                const result = new Date(params.value);
                return result.toLocaleDateString("es")
            }
        },
                {
            headerName: 'Hora', field: 'pinData.fecha',
            valueFormatter: function (params) {
                const result = new Date(params.value);
                return result.toLocaleTimeString("es")
            }
        }
    ],

    defaultColDef: {
        filter: 'agTextColumnFilter',
        resizable: true,
        sortable: true,
        flex: 1
    },   

    detailCellRendererParams: {
        detailGridOptions: {
            columnDefs: [
                { headerName: 'Temperatura Corpolar', field: 'temperaturaCorporal' },
                { headerName: 'Temperatura Ambiente', field: 'temperaturaAmbiente' },
                { headerName: 'Humedad', field: 'humedad' },
                {
                    headerName: 'Fecha', field: 'fecha',
                    valueFormatter: function (params) {
                        const result = new Date(params.value);
                        return result.toLocaleDateString("es")
                    }
                },
                {
                    headerName: 'Hora', field: 'fecha',
                    valueFormatter: function (params) {
                        const result = new Date(params.value);
                        return result.toLocaleTimeString("es")
                    }
                }
            ],
            defaultColDef: {
                filter: 'agTextColumnFilter',
                resizable: true,
                sortable: true,
                flex: 1
            },
            enableRangeSelection: true,
            enableCharts: true,
            animateRows: true,
        },
        getDetailRowData: function (params) {
            params.successCallback(params.data.heatmapData.positions);
        }
    },
}

export default gridOptions; 