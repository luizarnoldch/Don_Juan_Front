import React from 'react'

import './boleta-cajero.scss'

const BoletaCajero = props => {

  const head = props.head[0]
  const body = props.body
  const foot = props.foot[0]

  const menu = body.filter((item) => {
    return item.tipo === "Menu"
  })

  const carta = body.filter((item) => {
    return item.tipo === "Carta"
  })

  return (
    <div>
      <div className="boleta-title">
        <h1>Resumen de Pedido</h1>
      </div>
      <div className="boleta-header">
        <p>Pedido: {head.pedido}</p>
        <p>Fecha: {head.fecha}</p>
        <p>Tipo: {head.tipo}</p>
        <p>Mesa: N° {head.mesa}</p>
        <p>Caja: {head.cajero} - {head.nombre_cajero}</p>
        <p>Mesero: {head.mesero} - {head.nombre_mesero}</p>
      </div>
      <div className="boleta-space">
        <div className="beleta-space__cantidad">
          <span>Cantid. Producto</span>
        </div>
        <div className="beleta-space__cantidad">
          <span>Subtotal</span>
        </div>
      </div>
      <div className="boleta-body">
        {
          menu.map((item,index) => (
            <>
              <p className='boleta-body__mesa'>Menu N° {(index+1)}</p>
              
              <div className="boleta-body__pedido">
                <div className="boleta-body__pedido__menu">
                  <div className="boleta-body__pedido__menu__entrada">
                    <p>{item.nombre[0].entrada}</p>
                  </div>
                  <div className="boleta-body__pedido__menu__segundo">
                    <p>{item.nombre[0].segundo}</p>
                  </div>
                  <div className="boleta-body__pedido__menu__postre">
                    <p>{item.nombre[0].postre}</p> 
                  </div>
                </div>
                <div className="boleta-body__pedido__menu__precio">
                  <span>S/. {item.precio}</span>
                </div>
              </div>
            </>
          ))
        }
        {
          carta.map((item, index)=> (
            <>
              <p className='boleta-body__mesa'>Carta N° {(index+1)}</p>
              <div className="boleta-body__pedido">
                <div className="boleta-body__pedido__carta">
                  <p>{item.nombre}</p>
                </div>
                <div className="boleta-body__pedido__carta__precio">
                  <span>S/. {item.precio}</span>
                </div>
              </div>
            </>
          ))
        }
      </div>
      <div className="boleta-footer">
        <div className="boleta-footer__total">
          <div className='boleta-footer__total__title'>
            <i className="fa-solid fa-print"></i>
            <p>Total a pagar:</p>
          </div>
          <p>S/. {foot.total}</p> 
        </div>
      </div>
    </div>
  )
}

export default BoletaCajero
