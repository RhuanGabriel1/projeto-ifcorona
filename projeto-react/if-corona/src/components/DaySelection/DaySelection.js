import React from 'react';
import "../DaySelection/DaySelection.css"

const DaySelection = (props) =>{

    return(
        //Colocar um div container para separar dos card
        <>
        <h1>Selecione um dia</h1>
        <div className='select'>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        </>
    )
}


export default DaySelection;