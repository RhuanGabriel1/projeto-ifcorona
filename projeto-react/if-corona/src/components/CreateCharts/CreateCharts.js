import React from 'react';
import "../CreateCharts/CreateCharts.css"


const CreateCharts = (props) => {
    return (
        <>
            <div className="container">
                <h1 className='title'>Criar seu próprio gráfico</h1>

                    <h1>Selecione um gráfico</h1>

                <div className='select'>
                    <select>
                        <option>Gráfico de linhas</option>
                        <option>Gráfico de colunas</option>
                    </select>
                </div>

                <div className="data-text">
                    <span>Teste</span>
                </div>

                <hr />

                <div className="user-chart">
                    <span>User Chart</span>
                </div>

            </div>

        </>
    )
}


export default CreateCharts;