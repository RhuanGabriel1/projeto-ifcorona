import React from 'react';
import '../ChartSpaces/ChartSpaces.css';
import ChartConfirmedCases from '../Charts/ChartConfirmedCases';
import ChartConfirmedDeaths from '../Charts/ChartConfirmedDeaths';
import ChartRecoveredCases from '../Charts/ChartRecoveredCases';
import ChartStateMap from '../Charts/ChartStateMap';


const Chart = (props) =>{

    return(
        
        <div className="external-container">

            <div className="first-inner-container">
                <div className="first-left-space">
                    <h1 className="vertical"><span>Casos Confirmados</span></h1>
                    <ChartConfirmedCases/>
                </div>

                <div className="first-right-space">
                    <h1 className="vertical"><span>Óbitos Confirmados</span></h1>
                    <ChartConfirmedDeaths/>
                </div>
            </div>

            <div className="second-inner-container">
                <div className="second-left-space">
                    <h1 className="vertical"><span>Casos Recuperados</span></h1>
                    <ChartRecoveredCases/>
                </div>

                <div className="second-right-space">
                    <h1 className="vertical"><span>Mapa do Estado de São Paulo</span></h1>
                    <ChartStateMap/>
                </div>
            </div>

        </div>
    )
}


export default Chart;