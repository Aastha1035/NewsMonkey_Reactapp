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
          <li className="nav-item dropdown"><a className="nav-link " href="/About">About</a></li>
           <li className='nav-item dropdown'><a href="/Buisness" className="nav-link">Buisness</a></li>
           <li className='nav-item dropdown'><a href="/Entertainment" className="nav-link">Entertainment</a></li>
           <li className='nav-item dropdown'><a href="/General" className="nav-link">General</a></li>
           <li className='nav-item dropdown'><a href="/Health" className="nav-link">Health</a></li>
           <li className='nav-item dropdown'><a href="/Science" className="nav-link">Science</a></li>
           <li className='nav-item dropdown'><a href="/Sports" className="nav-link">Sports</a></li>
           <li className='nav-item dropdown'><a href="/Technology" className="nav-link">Technology</a></li>
        </ul>
    </div>
    </div>
    </nav>
</div>
    )
  }
}

export default Navbar
