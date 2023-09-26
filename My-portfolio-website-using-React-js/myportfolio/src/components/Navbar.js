import React from 'react'
import {BrowserRouter,NavLink,Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import contact from './Contact'
import projects from './Projects'
import Skills from './Skills'
import Home from './Home'
export default function Navbar() {
  return (
    <div style={{marginBottom:"1rem"}}>

<nav className="navbar navbar-dark bg-dark relative" style={{width:"100%"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/Home">My Portfolio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">My Portfolio</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

        <li className="nav-item">
            <NavLink className="nav-link active" to="/">About Me</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/Contact">Contacts</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/Skills">Skills</NavLink>
          </li>

          
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
