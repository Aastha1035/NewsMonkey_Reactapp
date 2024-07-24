import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="#">NewsMonkey</Link>
             < button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
             <span className="navbar-toggler-icon"></span>
             

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
             <li className="nav-item dropdown"><Link className="nav-link" to="/">Home</Link></li>
           <li className='nav-item dropdown'><Link to="/Entertainment" className="nav-link">Entertainment</Link></li>
           <li className='nav-item dropdown'><Link to="/General" className="nav-link">General</Link></li>
           <li className='nav-item dropdown'><Link to="/Health" className="nav-link">Health</Link></li>
           <li className='nav-item dropdown'><Link to="/Science" className="nav-link">Science</Link></li>
           <li className='nav-item dropdown'><Link to="/Sports" className="nav-link">Sports</Link></li>
           <li className='nav-item dropdown'><Link to="/Technology" className="nav-link">Technology</Link></li>
        </ul>
    </div>
    </div>
    </nav>
</div>
    )
  }
}

export default Navbar
