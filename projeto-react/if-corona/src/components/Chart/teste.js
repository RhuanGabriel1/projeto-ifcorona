import React from "react";


const Teste = {

    chart:{
        type: 'column',
        zoomType:'xy'
    },

    title: {
        text: 'Primeiro gráfico teste!'
    },

    series:[{
        name: 'Profit',
        data: {
            csvUrl: "https://raw.githubusercontent.com/mekhatria/demo_highcharts/master/globalTemperatureChange.csv"
        }
    }],

};

export default Teste;