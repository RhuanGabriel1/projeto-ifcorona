import React from 'react';
import "../Cards/Cards.css"
import CardSingle from '../CardSingle/CardSingle';


const Cards = (props) =>{

    return(
        <div className="cards">
                <CardSingle title="Casos Confirmados" value="31.417.341" class="las la-check-circle"/>
                <CardSingle title="Óbitos Confirmados" value="667.960" class="las la-book-dead"/>
                <CardSingle title="Casos Recuperados" value="30.178.187" class="las la-book-medical"/>
                <CardSingle title="Média Movel" value="147" class="las la-chart-area"/>
        </div>
    )
}


export default Cards;