import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LayoutCajero from '../components/layout/cajero/Cajero'

import Cajero from '../pages/cajero/Cajero'
import Empleados from '../pages/cajero/views/Empleados'
import Mesas from '../pages/cajero/views/Mesas'
import Productos from '../pages/cajero/views/Productos'
import Usuario from '../pages/cajero/views/Usuario'

const Routes = () => {
  return (
    // Layout Cajero
    <Route exact path="/cajero" component={LayoutCajero}>
      <Switch>
        <Route index component={Cajero}/>
        <Route path="/usuario" component={Usuario}/>
        <Route path="/mesas" component={Mesas}/>
        <Route path="/productos" component={Productos}/>
        <Route path="/empleados" component={Empleados}/>
      </Switch>
    </Route>
  )
}

export default Routes