import React from "react"
import "../../App.css"
import MainContent from "../MainContent/MainContent"
import SideBar from "../SideBar/SideBar"

const Page = ({children}) => {

    return(
    <div className="App">
      <input type="checkbox" id="nav"/>
      <SideBar/>
      <MainContent>
      {children}
      </MainContent>
    </div>
    )
}

export default Page