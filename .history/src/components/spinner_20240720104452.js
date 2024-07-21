import React, { Component } from 'react'
import loadings from './Spinner_gif.gif'

export class Spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img src={loadings} alt="loading" />
      </div>
    )
  }
}

export default Spinner

