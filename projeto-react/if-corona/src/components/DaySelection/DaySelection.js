import React, {useState} from 'react';
import "../DaySelection/DaySelection.css"

const DaySelection = (props) =>{

    const [selectState, setSelectState] = useState(1);

    return(
        <>
        <div className='select-text'>
            <h1>Selecione um dia</h1>
        </div>
        <div className='select' value={selectState} onChange={(e)=>{const selectState = e.target.value; setSelectState(selectState); }}>
            <select>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
            </select>
            {selectState}
        </div>
        </>
    )
}


export default DaySelection;