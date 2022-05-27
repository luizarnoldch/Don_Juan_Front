import React from 'react'

import './login-card.scss';

const LoginCard = props => {

  const name = props.name;

  return (
    <>
      <div className="login-card">
        <div className="login-card__content">
          <div className="login-card__content__img">
            <img src={`/img/login/${name}.png`} alt={name} />
          </div>
          <div className="login-card__content__info">
            <h1 className="login-card__title">{name}</h1>
          </div>
        </div>
        
      </div>
    </>
    
  )
}

export default LoginCard
