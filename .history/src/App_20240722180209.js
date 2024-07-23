
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


export  default class  App extends Component {

  render() {
    pageSize=15;
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News pageSize={this.pageSize} key='General' country='us' category='General'/>}/>
          <Route exact path="/Buisness" element={<News pageSize={this.pageSize} key='Buisness' country='us' category='Buisness'/>}/>
          <Route exact path="/Entertainment" element={<News pageSize={this.pageSize} key='Entertainment' country='us' category='Entertainment'/>}/>
          <Route exact path="/General" element={<News pageSize={this.pageSize} key='General' country='us' category='General'/>}/>
          <Route exact path="/Health" element={<News pageSize={this.pageSize}  key='Health'country='us' category='Health'/>}/>
          <Route exact path="/Science" element={<News pageSize={this.pageSize} key='Science' country='us' category='Science'/>}/>
          <Route exact path="/Sports" element={<News pageSize={this.pageSize}  key='Sports'country='us' category='Sports'/>}/>
          <Route exact path="/Technology" element={<News pageSize={this.pageSize}  key='Technology' country='us' category='Technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

