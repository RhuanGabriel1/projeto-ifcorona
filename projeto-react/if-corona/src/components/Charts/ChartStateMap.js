import React from 'react';
import '../Charts/Charts.css'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highmaps";
import topology from '../Charts/map.json'



const ChartStateMap = (props) => {
    const { stateMap,selectedDay } = props;
    const data = stateMap.find(item => item.day == selectedDay);

    const options = {
        chart: {
            backgroundColor: '#fcd9e5',
            map: topology
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                alignTo: "spacingBox",
            }
        },
        
        colorAxis: {
            min: 0,
        },
        series: [
            {
                name: "Random data",
                states: {
                    hover: {
                        color: "#ec0b43"
                    },
                },
                dataLabels: {
                    enabled: true,
                    format: "{point.name}"
                },
                allAreas: false,
                data: [             
                    ['br-sp', data?.sp],
                    ['br-mg', data?.mg],
                    ['br-rj', data?.rj],
                    ['br-es', data?.es],
                ],
    
            }
        ]
        
    };

    return (
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"mapChart"}
                options={options}
            />
    )
}


export default ChartStateMap;