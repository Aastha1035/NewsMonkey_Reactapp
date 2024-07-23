
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';

export  default class  App extends Component {
  static defaultProps = {
    country : 'in',
    pageSize: 8
  }

  static PropTypes = {
    
  }
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={10} country="us" />
      </div>
    )
  }
}

