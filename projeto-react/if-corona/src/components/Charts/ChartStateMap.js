import React from 'react';
import '../Charts/Charts.css'
// import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { color } from "highcharts/highmaps";
import topology from '../Charts/map.json'

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
                ['br-sp', 40],
                ['br-mg', 9],
                ['br-rj', 20],
                ['br-es', 60],
            ],

        }
    ]
    
};

const ChartStateMap = (props) => {
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"mapChart"}
                options={options}
            />
        </>
    )
}


export default ChartStateMap;