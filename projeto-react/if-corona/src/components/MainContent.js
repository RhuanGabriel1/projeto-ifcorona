import React from 'react';
import './MainContent.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const MainContent = (props) =>{
    return(
        <div className="main-content">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default MainContent;