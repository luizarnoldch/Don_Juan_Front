import React from 'react'

const Mesas = () => {
  return (
    <div className="mesa-slide__item">
      <div className="mesa-slide__item__content">
        <div className="mesa-slide__item__content__state">
          <div className="mesa-slide__item__content__state__info">
            <span>
              {props.estado}
            </span>
          </div>
        </div>
        <div className="mesa-slide__item__content__info">
          <h1>{props.mesa}</h1>
          <span>{props.mesero}</span>
        </div>
        <div className="mesa-slide__item__content__compra">
          <div className="mesa-slide__item__content__compra__icon">
            <i className={props.icon}></i>
          </div>
          <div className="mesa-slide__item__content__compra__menu">
            <span>Menú: {props.menu}</span>
          </div>
          <div className="mesa-slide__item__content__compra__carta">
            <span>Carta: {props.carta}</span>
          </div>
          <div className="mesa-slide__item__content__compra__total">
            <span>S/ {props.total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mesas
