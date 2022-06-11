import React from "react"
import Page from "../../components/Page"
import Chart from "../../components/Chart/Chart"
import Cards from "../../components/Cards/Cards"
import DaySelection from "../../components/DaySelection/DaySelection"

const Home = ()=>{

    return(
        <Page sidebar="Dashboard">
            <Cards/>
            <DaySelection/>
        </Page>
    )
}

export default Home