
import React from 'react'

import './topvar.scss'

const TopVar = () => {
  return (
    <div className='topnav'>
      <div className="topnav__title">
          <span>
            Tablero Descriptivo
          </span>
      </div>
      <div className="topnav__right">
        <div className="topnav__right__content">
          <div className="topnav__right__content__logo">
            <div className="topnav__right__content__logo__border">
              <div className="topnav__right__content__logo__perfil">
                NU
              </div>
            </div>
          </div>
          <div className="topnav__right__content__name">
            <span>
              Nombre de usuario
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopVar
