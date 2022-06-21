import React from 'react';
import '../ChartSpaces/ChartSpaces.css';
import ChartConfirmedCases from '../Charts/ChartConfirmedCases';
import ChartConfirmedDeaths from '../Charts/ChartConfirmedDeaths';
import ChartRecoveredCases from '../Charts/ChartRecoveredCases';
import ChartStateMap from '../Charts/ChartStateMap';


const Chart = (props) =>{
    const { chartValues ,selectedDay} = props;

    const confirmedCases = chartValues.filter(item=>item.chartName==="confirmedCases");
    const confirmedDeaths = chartValues.filter(item=>item.chartName==="confirmedDeaths");
    const recoveredCases = chartValues.filter(item=>item.chartName==="recoveredCases");
    const stateMap = chartValues.filter(item => item.chartName === "stateMap");
    
    return(
        <div className="external-container">

            <div className="first-inner-container">
                <div className="first-left-space">
                    <h1 className="vertical"><span>Casos Confirmados</span></h1>
                    <ChartConfirmedCases confirmedCases={confirmedCases} selectedDay={selectedDay} />
                </div>

                <div className="first-right-space">
                    <h1 className="vertical"><span>Óbitos Confirmados</span></h1>
                    <ChartConfirmedDeaths confirmedDeaths={confirmedDeaths} selectedDay={selectedDay}/>
                </div>
            </div>

            <div className="second-inner-container">
                <div className="second-left-space">
                    <h1 className="vertical"><span>Casos Recuperados</span></h1>
                    <ChartRecoveredCases recoveredCases={recoveredCases} selectedDay={selectedDay}/>
                </div>

                <div className="second-right-space">
                    <h1 className="vertical"><span>Mapa regional</span></h1>
                    <ChartStateMap stateMap={stateMap} selectedDay={selectedDay}/>
                </div>
            </div>

        </div>
    )
}


export default Chart;