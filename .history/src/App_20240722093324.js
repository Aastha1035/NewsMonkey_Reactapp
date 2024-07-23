
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export  default class  App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/"><News pageSize={10} country='us' category='About'/></Route>
          <Route path="/Buisness"><News pageSize={10} country='us' category='Buisness'/></Route>
          <Route path="/Entertainment"><News pageSize={10} country='us' category='Entertainment'/></Route>
          <Route path="/General"><News pageSize={10} country='us' category='General'/></Route>
          <Route path="/Health"><News pageSize={10} country='us' category='Health'/></Route>
          <Route path="/Science"><News pageSize={10} country='us' category='Science'/></Route>
          <Route path="/Sports"><News pageSize={10} country='us' category='Sports'/></Route>
          <Route path="/Technology"><News pageSize={10} country='us' category='Technology'/></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

