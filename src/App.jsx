import React from 'react'
import Order from './components/Order'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <Route>
    <Order/>
   </Route>
   
  )
}

export default App

