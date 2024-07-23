
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export  default class  App extends Component {
  pageSize=15;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize} key='General' country='us' category='General'/>}/>
          <Route exact path="/Buisness" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize} key='Buisness' country='us' category='Buisness'/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize} key='Entertainment' country='us' category='Entertainment'/>}/>
          <Route exact path="/General" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize} key='General' country='us' category='General'/>}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize}  key='Health'country='us' category='Health'/>}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize} key='Science' country='us' category='Science'/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize}  key='Sports'country='us' category='Sports'/>}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    pageSize={this.pageSize}  key='Technology' country='us' category='Technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

