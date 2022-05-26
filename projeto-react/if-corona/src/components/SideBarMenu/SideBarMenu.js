import React from 'react';
import '../SideBarMenu/SideBarMenu.css'

const SideBarMenu = (props) =>{
    return(
        <div className="sidebar-menu">
            <ul>
                <li><a href="#" className="active"><span className="las la-chart-line"></span><span>Dashboard</span></a></li>
                <li><a href="contato.html"><span className="las la-at"></span><span>Contato</span></a></li>
                <li><a href="#"><span className="las la-user-circle"></span><span> Conta</span></a></li>
            </ul>
        </div>
    )
}

export default SideBarMenu;