import React from 'react'

import './mesero.scss'

import Routes from '../../../config/Mesero.Routes'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import SideBar from "../../sidebar/SideBar"

const Mesero = () => {
  return (
    <Router>
      <Route render={(props) => (
          <div className="layout-mesero">
            <SideBar/>
            <div className="layout-mesero-main">
              <Routes/>
            </div>
          </div>
      )}/>
    </Router>
  )
}

export default Mesero