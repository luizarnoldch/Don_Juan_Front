import React from 'react'

import './login.scss'

import LoginCard from '../baraja/LoginCard'

const Login = () => {
  return (
    <div className="login">
      <LoginCard
        name="mesero"
      />
      <LoginCard
        name="cajero"
      />
    </div>
  )
}

export default Login