import React, {useState} from 'react';
import "../CreateCharts/CreateCharts.css"
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const line = {
    chart: {
        backgroundColor: '#fcd9e5',
        type: 'line'
    },

    title:{
        text: "Nome não definido"
    },
    
   
    series:[
        {
        name: "Teste",
        data: [1000, 1500, 2000]
        },
        
        {
            name: "Teste",
            data: [100, 150, 200]
    }],

}
const column = {
    chart: {
        backgroundColor: '#fcd9e5',
        type: 'column'
    },

    title:{
        text: "Nome não definido"
    },
    xAxis: { 
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
    
    series:[
        {
        name: "Casos de covid em Campinas",
        data: [1000, 1500, 2000]
        },
        
        {
            name: "Teste",
            data: [100, 150, 200]
    }],

}

const CreateCharts = (props) => {

    const [newChart, setNewChart] = useState("");

    return (
        <>
            <div className="container">

                <h1 className='title'>Criar seu próprio gráfico</h1>
                
                <div className='data-text'>
                    <h1>Selecione um gráfico</h1>
                    
                    <span className='vertical'>Dado 1: </span>
                    <input type="number" placeholder='Insira aqui...'/>
                    <span className='vertical'>Dado 2: </span>
                    <input type="number" placeholder='Insira aqui...'/>
                    <span className='vertical'>Dado 3: </span>
                    <input type="number" placeholder='Insira aqui...'/>
                    
                </div> 
                
                <div className='select'>
                    <select>
                        <option>Gráfico de linhas</option>
                        <option>Gráfico de colunas</option>
                    </select>
                </div>

                <hr />
                <span className='vertical'>Nome: </span>
                <input className="name-text" type="text" placeholder='Insira aqui...'/>

                <div className="user-chart">
                    <HighchartsReact className="highcharts-container" highcharts={Highcharts} options={column}/>
                </div>
                <button className="btnEnviarMensagem" >Enviar Gráfico</button>

            </div>

        </>
    )
}


export default CreateCharts;