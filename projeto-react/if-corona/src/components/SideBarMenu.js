import React from 'react';
import './SideBarMenu.css'

const SideBarMenu = (props) =>{
    return(
        <div class="sidebar-menu">
            <ul>
                <li><a href="#" class="active"><span class="las la-chart-line"></span><span>Dashboard</span></a></li>
                <li><a href="contato.html"><span class="las la-at"></span><span>Contato</span></a></li>
                <li><a href="#"><span class="las la-user-circle"></span><span> Conta</span></a></li>
            </ul>
        </div>
    )
}

export default SideBarMenu;