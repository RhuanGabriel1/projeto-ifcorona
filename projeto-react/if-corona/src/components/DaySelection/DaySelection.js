import React from 'react';
import "../DaySelection/DaySelection.css"

const DaySelection = (props) => {


    return (
        <>
            <div className='select-text'>
                <h1>Selecione um dia</h1>
            </div>
            <div className='select'>
                <select value={props.selectedDay} onChange={(e) => props.setSelectedDay(e.target.value)}>
                    {props.values.sort((a,b)=>a.day-b.day).map(item => (
                    <option value={item.day} > {item.day} </option>))}
                </select>
            </div>
        </>
    )
}


export default DaySelection;