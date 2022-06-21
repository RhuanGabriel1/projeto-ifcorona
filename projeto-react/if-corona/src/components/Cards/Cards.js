import React from 'react';
import "../Cards/Cards.css"
import CardSingle from '../CardSingle/CardSingle';
import DaySelection from '../DaySelection/DaySelection';


const Cards = (props) =>{

    const filteredValue = props.values.find((item)=> item.day==props.selectedDay)
    return(
        <div className="cards">
                <CardSingle title="Casos Confirmados" value={filteredValue?.confirmedCases} class="las la-check-circle"/>
                <CardSingle title="Óbitos Confirmados" value={filteredValue?.confirmedDeaths} class="las la-book-dead"/>
                <CardSingle title="Casos Recuperados" value={filteredValue?.recoveredCases} class="las la-book-medical"/>
                <CardSingle title="Média Movel" value={filteredValue?.movingAverage} class="las la-chart-area"/>
        </div>
    )
}

export default Cards;