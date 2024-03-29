import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";


export default function Navbar(props) {
   
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{paddingTop:'0px'}}  >
  <div className="container-fluid" style={{backgroundColor:'skyblue', height:'55px'}}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch `}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchMode" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : 'set-title-here'
}