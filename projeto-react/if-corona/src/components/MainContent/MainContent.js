import React from 'react';
import '../MainContent/MainContent.css'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


const MainContent = ({ children }) => {
    return (
        <div className="main-content">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default MainContent;