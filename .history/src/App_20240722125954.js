
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


export  default class  App extends Component {

  render() {
    return (
      <div>

        <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<News pageSize={5} key='General' country='us' category='General'/>}/>
          <Route exact path="/Buisness" element={<News pageSize={5} key='Buisness' country='us' category='Buisness'/>}/>
          <Route exact path="/Entertainment" element={<News pageSize={5} key='Entertainment' country='us' category='Entertainment'/>}/>
          <Route exact path="/General" element={<News pageSize={5} key='General' country='us' category='General'/>}/>
          <Route exact path="/Health" element={<News pageSize={5}  key='Health'country='us' category='Health'/>}/>
          <Route exact path="/Science" element={<News pageSize={5} key='Science' country='us' category='Science'/>}/>
          <Route exact path="/Sports" element={<News pageSize={5}  key='Sports'country='us' category='Sports'/>}/>
          <Route exact path="/Technology" element={<News pageSize={5}  key='Technology' country='us' category='Technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

