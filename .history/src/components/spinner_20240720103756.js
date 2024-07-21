import React, { Component } from 'react'
import loading from './Spinner_gif.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner
