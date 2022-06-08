import React from 'react';
import { useNavigate } from 'react-router';
import '../SideBarMenu/SideBarMenu.css'

const SideBarMenu = (props) =>{
    const navigate = useNavigate();
    return(
        <div className="sidebar-menu">
            <ul>
                <li><a onClick={()=>navigate("/")}><span className="las la-chart-line"></span><span>Dashboard</span></a></li>
                <li><a onClick={()=>navigate("/contato")} ><span className="las la-at"></span><span>Contato</span></a></li>
                <li><a onClick={()=>navigate("/")} ><span className="las la-user-circle"></span><span> Conta</span></a></li>
            </ul>
        </div>
    )
}

export default SideBarMenu;