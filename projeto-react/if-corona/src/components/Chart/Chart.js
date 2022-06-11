import React from 'react';
import '../Chart/Chart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Teste from './teste';

const Chart = (props) =>{

    return(
        <>
            <HighchartsReact highcharts={Highcharts} options={Teste}/>
        </>
    )
}


export default Chart;