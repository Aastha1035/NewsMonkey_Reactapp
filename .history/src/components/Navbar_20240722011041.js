import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">NewsMonkey</a>
             < button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
             <span className="navbar-toggler-icon"></span>
             

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
          <li className="nav-item dropdown"><a className="nav-link " href="/about">About</a></li>
           <li className='nav-item dropdown'><a href="/buisness" className="nav-link">buisness</a></li>
           <li className='nav-item dropdown'><a href="/entertainment" className="nav-link">entertainment</a></li>
           <li className='nav-item dropdown'><a href="/general" className="nav-link">general</a></li>
           <li className='nav-item dropdown'><a href="/health" className="nav-link">health</a></li>
           <li className='nav-item dropdown'><a href="/science" className="nav-link">science</a></li>
           <li className='nav-item dropdown'><a href="/sports" className="nav-link">sports</a></li>
           <li className='nav-item dropdown'><a href="/technology" className="nav-link">technology</a></li>
        </ul>
    </div>
    </div>
    </nav>
</div>
    )
  }
}

export default Navbar
