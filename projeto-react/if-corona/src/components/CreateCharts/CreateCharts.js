import React from 'react';
import "../CreateCharts/CreateCharts.css"

const CreateCharts = (props) => {
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

                 <button className="btnEnviarMensagem" >Carregar Gráfico</button>


                <div className="user-chart">
                    <span>User Chart</span>
                </div>
                <button className="btnEnviarMensagem" >Enviar Gráfico</button>

            </div>

        </>
    )
}


export default CreateCharts;