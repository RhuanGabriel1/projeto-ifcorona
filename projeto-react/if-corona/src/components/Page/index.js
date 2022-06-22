import React from "react"
import "../../App.css"
import MainContent from "../MainContent/MainContent"
import SideBar from "../SideBar/SideBar"

const Page = ({ children, sidebar }) => {
  return (
    <div className="App">
      <input type="checkbox" id="nav" />
      <SideBar sidebar={sidebar} />
      <MainContent>
        {children}
      </MainContent>
    </div>
  )
}

export default Page