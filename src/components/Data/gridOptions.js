import IndicatorCellRenderer from "../IndicatorCellRenderer/IndicatorCellRenderer"

const gridOptions = {
    masterDetail: true,
    animateRows: true,

    columnDefs: [
        { headerName: 'Número de identificación', field: 'pinData.id', cellRenderer: 'agGroupCellRenderer'},
        { headerName: 'Temperatura Corpolar Actual °C', field: 'pinData.temperaturaCorporal', cellRenderer:'ledCellRenderer'},
        { headerName: 'Temperatura Ambiente Actual °C ', field: 'pinData.temperaturaAmbiente'},
        { headerName: 'Humedad Actual %', field: 'pinData.humedad' },
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
            frameworkComponents:{ indicatorCellRenderer: IndicatorCellRenderer},
            columnDefs: [
                { headerName: 'Temperatura Corpolar °C', field: 'temperaturaCorporal' },
                { headerName: 'Temperatura Ambiente °C', field: 'temperaturaAmbiente' },
                { headerName: 'Humedad %', field: 'humedad' },
                { headerName: 'Estres térmico', cellRenderer: 'indicatorCellRenderer' },
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