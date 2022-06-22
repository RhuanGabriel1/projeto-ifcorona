import React from 'react';
import '../Charts/Charts.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartConfirmedDeaths = (props) => {
    const { confirmedDeaths, selectedDay } = props;
    const data = confirmedDeaths.find(item => item.day == selectedDay);

    const options = {
        chart: {
            backgroundColor: '#fcd9e5',
            type: 'line'
        },

        title: {
            text: "Óbitos Confirmados de Covid-19"
        },
        xAxis: {
            categories: ['Manhã', 'Tarde', 'Noite']
        },
        series: [
            {
                name: "Óbitos Confirmados",
                data: [data?.morning, data?.afternoon, data?.night]
            },
        ],

    }

    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )


}


export default ChartConfirmedDeaths;