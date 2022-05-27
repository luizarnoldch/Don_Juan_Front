import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Routes from '../../config/Index.Routes'

const Home = () => {
  return (
    <Router>
      <Route render={(props) => (
        <>
          <Routes/>
        </>
      )}/>
    </Router>
  )
}

export default Home