import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'



import Index from './config/Index.Routes'

import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </React.StrictMode>
);