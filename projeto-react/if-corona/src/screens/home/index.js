import React, {useState, useEffect, useCallback} from "react"
import Page from "../../components/Page"
import ChartSpaces from "../../components/ChartSpaces/ChartSpaces"
import Cards from "../../components/Cards/Cards"
import DaySelection from "../../components/DaySelection/DaySelection"
import { db } from '../../firebase-config';
import {collection, getDocs} from "firebase/firestore"

const HomePage = ()=>{

    const valuesCollectionRef = collection(db, "values");
    const chartCollectionRef = collection(db, "chart");
    const [values, setValues] = useState([]);
    const [chartValues, setChartValues] = useState([]);


    const getCardValues = useCallback(async () =>{
        const response = await getDocs(valuesCollectionRef);
        setValues(
            response.docs.map(item => item.data())
        );
    }, [] )

    const getChartValues = useCallback(async () =>{
        const response = await getDocs(chartCollectionRef);
        setChartValues(
            response.docs.map(item => item.data())
        );
    }, [] )

    useEffect(()=> {
        getCardValues();
        getChartValues();
    }, [getCardValues,getChartValues])

    const [selectedDay, setSelectedDay] = useState(1);
    return(
        <Page sidebar="Dashboard">
            <Cards selectedDay={selectedDay} values={values}/>
            <DaySelection setSelectedDay={setSelectedDay} selectedDay={selectedDay} values={values}/>
            <ChartSpaces chartValues={chartValues} selectedDay={selectedDay } />
        </Page>
    )
}

export default HomePage