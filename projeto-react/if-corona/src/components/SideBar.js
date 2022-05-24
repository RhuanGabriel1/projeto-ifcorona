import React from 'react';
import SideBarBrand from './SideBarBrand';
import SideBarMenu from './SideBarMenu';
import './SideBar.css'

const SideBar = (props) =>{
    return(
        <div class="sidebar">
            <SideBarBrand/>
            <SideBarMenu/>
        </div>
    )
}


export default SideBar;