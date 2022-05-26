import React from 'react';
import SideBarBrand from '../SideBarBrand/SideBarBrand';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import '../SideBar/SideBar.css'

const SideBar = (props) =>{
    return(
        <div className="sidebar">
            <SideBarBrand/>
            <SideBarMenu/>
        </div>
    )
}


export default SideBar;