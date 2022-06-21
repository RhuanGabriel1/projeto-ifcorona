import React from 'react';
import '../Charts/Charts.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartRecoveredCases = (props) =>{
    const { recoveredCases,selectedDay } = props;
    const data = recoveredCases.find(item => item.day == selectedDay);

    const options = {
        chart: {
            backgroundColor: '#fcd9e5',
            type: 'line'
        },
    
        title:{
            text: "Casos Recuperados de Covid-19"
        },

        series:[
            {
            name: "Casos Recuperados",
            data: [data?.morning, data?.afternoon, data?.night]
            },
        ],
    }

    return (
        <HighchartsReact highcharts={Highcharts} options={options}/>
    )
}

export default ChartRecoveredCases;