import React from "react"
import Page from "../../components/Page"
import ChartSpaces from "../../components/ChartSpaces/ChartSpaces"
import Cards from "../../components/Cards/Cards"
import DaySelection from "../../components/DaySelection/DaySelection"

const Home = ()=>{

    return(
        <Page sidebar="Dashboard">
            <Cards/>
            <DaySelection/>
            <ChartSpaces/>
        </Page>
    )
}

export default Home