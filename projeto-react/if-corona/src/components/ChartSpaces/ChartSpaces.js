import React from 'react';
import '../ChartSpaces/ChartSpaces.css';
import Charts from '../Charts/Charts';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) =>{

    return(
        
        <div className="external-container">

            <div className="first-inner-container">
                <div className="first-left-space">
                    <h1 className="vertical"><span>Primeiro bloco</span></h1>
                </div>

                <div className="first-right-space">
                    <h1 className="vertical"><span>Segundo bloco</span></h1>

                </div>
            </div>

            <div className="second-inner-container">
                <div className="second-left-space">
                    <h1 className="vertical"><span>Terceiro bloco</span></h1>

                </div>

                <div className="second-right-space">
                    <h1 className="vertical"><span>Quarto bloco</span></h1>

                </div>
            </div>

        </div>
    )
}


export default Chart;