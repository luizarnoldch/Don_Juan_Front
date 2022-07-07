import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

import SidebarLayout from '../components/layout/sidebarLayout/SidebarLayout'

//cajero
import Cajero from '../pages/cajero/Cajero'
import CajeroUsuario from '../pages/cajero/views/Usuario'
import CajeroProducto from '../pages/cajero/views/Productos'
import CajeroMesas from '../pages/cajero/views/Mesas'
import CajeroEmpleados from '../pages/cajero/views/Empleados'

//mesero
import Mesero from '../pages/mesero/Mesero'
import MeseroUsuario from '../pages/mesero/views/Usuario'
import MeseroProducto from '../pages/mesero/views/Productos'
import MeseroMesas from '../pages/mesero/views/Mesas'

const Config = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route path='/cajero' element={<SidebarLayout />}>
          <Route index element={<Cajero />}></Route>
          <Route path='usuarios' element={<CajeroUsuario />}></Route>
          <Route path='productos' element={<CajeroProducto />}></Route>
          <Route path='mesas' element={<CajeroMesas />}></Route>
          <Route path='empleados' element={<CajeroEmpleados />}></Route>
        </Route>

        <Route path='/mesero' element={<SidebarLayout />}>
          <Route index element={<Mesero />}></Route>
          <Route path='usuarios' element={<MeseroUsuario />}></Route>
          <Route path='productos' element={<MeseroProducto />}></Route>
          <Route path='mesas' element={<MeseroMesas />}></Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default Config;