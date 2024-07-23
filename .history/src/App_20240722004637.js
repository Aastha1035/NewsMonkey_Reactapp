
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './News';
import PropTypes from 'prop-types'


export  default class  App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={10} country='us'/>
      </div>
    )
  }
}

