import React from 'react';
import '../Charts/Charts.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        backgroundColor: '#fcd9e5',
        type: 'line'
    },

    title:{
        text: "Casos Confirmados de Covid-19"
    },
    series:[
        {
        name: "Casos Confirmados",
        data: [1000, 1500, 2000, 2500 ]
        },

        {
            name: "Teste",
            data: [100, 150, 200, 250 ]
    }],

}

const ChartConfirmedDeaths = (props) =>{
    return(
        <>
        <HighchartsReact highcharts={Highcharts} options={options}/>
        </>
    )
}


export default ChartConfirmedDeaths;