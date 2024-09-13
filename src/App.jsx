import React from 'react'
import Order from './components/Order'
import Header from "./components/Header"
import Success from "./components/Success"
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <>
    <Switch>

    <Route exact path="/">
   <Header/>
    </Route>

    <Route path="/Order">
      <Order />
    </Route>

   <Route>
    <Success exact path="/Success"/>
   </Route>

    </Switch>
  </>
  )
}

export default App

