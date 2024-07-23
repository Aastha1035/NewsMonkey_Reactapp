
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export  default class  App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Router>
        
        <Routes>
          <Route path="/" element={<News pageSize={10} country='us' category='About'/>}/>
          <Route path="/Buisness" element={<News pageSize={10} country='us' category='Buisness'/>}/>
          <Route path="/Entertainment" element={<News pageSize={10} country='us' category='Entertainment'/>}/>
          <Route path="/General" element={<News pageSize={10} country='us' category='General'/>}/>
          <Route path="/Health" element={<News pageSize={10} country='us' category='Health'/>}/>
          <Route path="/Science" element={<News pageSize={10} country='us' category='Science'/>}/>
          <Route path="/Sports" element={<News pageSize={10} country='us' category='Sports'/>}/>
          <Route path="/Technology" element={<News pageSize={10} country='us' category='Technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

