import React from 'react';
import "../DaySelection/DaySelection.css"

const DaySelection = (props) =>{

    return(
        <>
        <div className='select-text'>
            <h1>Selecione um dia</h1>
        </div>
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