import React from 'react';
import '../Charts/Charts.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const ChartConfirmedCases = (props) =>{
    const { confirmedCases,selectedDay } = props;
    const data = confirmedCases.find(item => item.day == selectedDay);

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
            data: [data?.morning, data?.afternoon, data?.night]
            },
           ],
    
    }

    return(
        <div className="chart-wrap">
            <HighchartsReact className="highcharts-container" highcharts={Highcharts} options={options}/>
        </div>
    )
}


export default ChartConfirmedCases;