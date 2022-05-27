import React from 'react'

import './cajero.scss'

import Routes from '../../../config/Cajero.Routes'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import SideBar from "../../sidebar/SideBar"

import sidebar_item from "../../../assets/json/sidebar/cajero/cajeroIcon.json"

const Cajero = () => {
  return (
    <Router>
      <Route render={(props) => (
          <div className="layout-cajero">
            <SideBar
              items={sidebar_item}
              usuario={`cajero`}
            />
            <div className="layout-cajero-main">
              <Routes/>
            </div>
          </div>
    )}/>
    </Router>
    
  )
}

export default Cajero