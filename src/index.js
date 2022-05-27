import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'

import Index from './config/Index.Routes'
import Cajero from './config/Cajero.Routes'
import Mesero from './config/Mesero.Routes'

import './App.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Index/>
        <Cajero/>
        <Mesero/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);