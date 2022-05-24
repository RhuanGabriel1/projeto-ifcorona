import React from 'react';
import UserWrapper from './UserWrapper';
import './Header.css'

const Header = (props) =>{
    return(
        <header>
        <h2>
            <label for="nav" id="cursor"><span className="las la-bars"></span></label>
            Dashboard
        </h2>
        <UserWrapper/>
        </header>
    )
}


export default Header;