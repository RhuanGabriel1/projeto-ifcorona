import React from 'react';
import "../CardSingle/CardSingle.css"


const CardSingle = (props) =>{

    return(
        <div className="card-single">
            <h2>{props.title}</h2>
            <span>{props.value}</span>
            <div>
                <span className={props.class}></span>
            </div>
        </div>
    )
}


export default CardSingle;