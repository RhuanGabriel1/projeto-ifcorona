import React from "react";
import { useNavigate } from "react-router";
import "../SideBarMenu/SideBarMenu.css";

const SideBarMenu = (props) => {
  const navigate = useNavigate();
     const sidebarItems = [
    {
      element: (
        <li>
          <a onClick={() => navigate("/")} className={props.sidebar === "Dashboard" ? "active": null} >
            <span className={"las la-chart-line"}></span>
            <span>Dashboard</span>
          </a>
        </li>
      ),
    },
    {
      element: (
        <li>
          <a onClick={() => navigate("/contato")} className={props.sidebar === "Contact" ? "active": null}>
            <span className="las la-at"></span>
            <span>Contato</span>
          </a>
        </li>
      ),
    },
    {
      element: (
        <li>
          <a onClick={() => navigate("/conta")} className={props.sidebar === "Account" ? "active": null}>
            <span className="las la-user-circle"></span>
            <span>Conta</span>
          </a>
        </li>
      ),
    },
  ];

  return (
    <div className="sidebar-menu">
          <ul>{sidebarItems.map(item=>item.element)}</ul>
    </div>
  );
};

export default SideBarMenu;
