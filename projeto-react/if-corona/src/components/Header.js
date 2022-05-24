import React from 'react';
import UserWreapper from './UserWreapper';
import './Header.css'

const Header = (props) =>{
    return(
        <header>
        <h2>
            <label for="nav" id="cursor"><span className="las la-bars"></span></label>
            Dashboard
        </h2>
        <UserWreapper/>
        </header>
    )
}


export default Header;