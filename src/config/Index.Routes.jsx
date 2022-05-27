import React from 'react'

import { Route } from 'react-router-dom'

import Home from '../pages/Home'

const Routes = () => {
  return (
    // Entrada y Salida
    <>
      <Route exact path="/" component={Home}/>
      {/* <Route path="salir"/> */}
    </>
  )
}

export default Routes;