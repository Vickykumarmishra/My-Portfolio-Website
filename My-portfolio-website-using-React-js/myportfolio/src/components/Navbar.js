import React from 'react'
import {BrowserRouter,NavLink,Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Contact from './Contact'
export default function Navbar() {
  return (
    <div style={{background:'lightgreen',marginRight:'0rem'}} >


      {/**Navbar starts Here*/}

<nav className="navbar navbar-light bg-light"  >
  <div className="container-fluid" style={{background:'lightgreen'}}>
    <BrowserRouter>
    <NavLink className="navbar-brand" to="/Home" ><b>myPortfolio</b></NavLink>
    <div>
    <NavLink  to="https://www.linkedin.com/in/vicky-kumar-mishra" ><motion.img src='linkedin.png'whileHover={{scale:1.2}} style={{height:'1.5rem' ,float:'right',border:'0.1em solid lightgreen'}}></motion.img></NavLink>

    <NavLink  to="https://github.com/Vickykumarmishra" ><motion.img src='github-logo.png' whileHover={{scale:1.2}} style={{height:'1.5rem',float:'right',marginLeft:'1rem',border:'0.1em solid lightgreen'}}></motion.img></NavLink>
    </div>
    </BrowserRouter>
   
  </div>
</nav>
{/**Navbar ends here*/}

      
    </div>
  )
}
