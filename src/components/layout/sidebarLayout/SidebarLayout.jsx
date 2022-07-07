import React, { useState, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import SideBar from '../../sidebar/SideBar'

import meseroIcon from "../../../assets/json/sidebar/mesero/meseroIcon.json"

import cajeroIcon from "../../../assets/json/sidebar/cajero/cajeroIcon.json"

import './sidebarLayout.scss'

const SidebarLayout = () => {

  const [sidebarItem, setSidebarItem] = useState([])
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.split('/')[1]
    
    if (path == "mesero") {
      setSidebarItem(meseroIcon)
    } else if (path == "cajero"){
      setSidebarItem(cajeroIcon)
    }
  },[])
  
  return (
    <div className='sidebar-layout'>
      <SideBar
        items={sidebarItem}
        usuario={`mesero`}
      />
      
      <Outlet/>
    </div>
  )
}

export default SidebarLayout