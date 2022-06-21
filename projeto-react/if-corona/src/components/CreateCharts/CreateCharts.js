import React, {useState,useEffect,useRef} from 'react';
import "../CreateCharts/CreateCharts.css"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {collection, addDoc} from "firebase/firestore"
import { db } from '../../firebase-config';
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const CreateCharts = (props) => {
    const data = JSON.parse(localStorage.getItem("data"))
    const chartRef = useRef();
    const chartCollectionRef = collection(db, "insertedCharts");
    const [chartData, setNewChartData] = useState({
        morning:Number(data?.morning) || 0,
        afternoon: Number(data?.afternoon) || 0,
        night: Number(data?.night) || 0,
    });


    const handleSubmit = async() => {
        try{
            await addDoc(chartCollectionRef, 
            {
                morning: chartData.morning,
                afternoon: chartData.afternoon,
                night: chartData.night
           });
           toast.success("Gráfico enviada com sucesso");
        }catch(error){
            console.log(error.message);
            toast.success("Gráfico não conseguiu ser enviada");
        }
    }

    const line = {
        chart: {
            backgroundColor: '#fcd9e5',
            type: 'line',
            redraw: true
        },
      
        title:{
            text: "Visualização"
        },
        xAxis: { 
            categories: ['Manhã', 'Tarde', 'Noite']
        },
        series:[
            {
            name: "Visualização",
            data: [chartData.morning, chartData.afternoon, chartData.night]
            },
           ],
    
    };

    return (
        <>
            <div className="container">
                <h1 className='title'>Criar seu próprio gráfico</h1>
                <div className='data-text'>
                    <span className='vertical'>Insira os dados da manhã: </span>
                    <input type="number" placeholder='Ex: 100'
                    onChange={(e) => {
                        setNewChartData({
                            ...chartData,
                            morning:e.target.value
                        })
                    }}
                     value={chartData.morning}
                    />
                    <span className='vertical'>Insira os dados da tarde: </span>
                    <input type="number" placeholder='Ex: 100'
                    onChange={(e) => {
                        setNewChartData({
                            ...chartData,
                            afternoon:e.target.value
                        })
                    }}
                     value={chartData.afternoon}
                    />
                    <span className='vertical'>Insira os dados da noite: </span>
                    <input type="number" placeholder='Ex: 100.' onChange={(e) => {
                        setNewChartData({
                            ...chartData,
                            night:e.target.value
                        })
                    }}
                        value={chartData.night} />
                    
                </div> 
                <hr />
                <button className="btnEnviarMensagem" onClick={() => {
                    localStorage.setItem("data", JSON.stringify(chartData));
                    window.location.reload();
                }}>Atualizar Indicador</button>
                <div className="user-chart">
                <HighchartsReact ref={chartRef} className="highcharts-container" 
                        allowChartUpdate={true}
                        highcharts={Highcharts} options={line} />
                 </div>
               
                
                <button className="btnEnviarMensagem" onClick={handleSubmit}>Enviar Gráfico</button>
            </div>
            <ToastContainer/>
        </>
    )
}


export default CreateCharts;