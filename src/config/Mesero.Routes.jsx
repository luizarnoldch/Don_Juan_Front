import React from 'react'

import { Route } from 'react-router-dom'

import LayoutMesero from '../components/layout/mesero/Mesero'

import Mesero from '../pages/mesero/Mesero'
import Usuario from '../pages/mesero/views/Usuario'
import Mesas from '../pages/mesero/views/Mesas'
import Productos from '../pages/mesero/views/Productos'

const Routes = () => {
  return (
    // Layout Mesero
    <Route exact path="/mesero" component={LayoutMesero}>
      <Route index component={Mesero}/>
      <Route path="/usuario" component={Usuario}/>
      <Route path="/productos" component={Productos}/>
      <Route path="/mesas" component={Mesas}/>
    </Route>
  )
}

export default Routes;