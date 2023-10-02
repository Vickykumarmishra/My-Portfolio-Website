import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'

import '../App.css';

import Typewriter from 'typewriter-effect';  //https://www.npmjs.com/package/typewriter-effect

export default function Home() {

 
  

  return (
    <div >
  
  <div className='container' style={{color:'white',fontSize:'4rem',fontFamily:'cursive',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}}>
         <h1  
         style={{color:'lightgreen',marginTop:"3rem",fontFamily:'cursive'}}> <b >Hello, I am </b></h1>
        {/*<h1  
         style={{color:'white',fontSize:'5rem',fontFamily:'tahoma',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}} data-aos="fade-left"  data-aos-duration="2000">Vicky Kumar Mishra</h1> */}

<Typewriter
      options={{
        strings: ['Vicky Kumar mishra', ' A Frontend Developer'],
        autoStart: true,
        loop: true,
      }}
     
    /></div>
        <center>

        <div  style={{}} className='container'>
        <p style={{color:'lightgreen',marginBottom:"2rem",fontSize:'1.5rem' ,marginTop:'3rem',fontFamily:"cursive"}}>
        I am a skilled Frontend Developer with a passion for crafting engaging and user-friendly web experiences.With over 2 years of expertise in React.js, JavaScript, and Redux, I have contributed to the success of various projects.My commitment to clean, efficient code and continuous learning drives my ability to deliver high-quality solutions. I thrive in collaborative environments and take pride in turning complex ideas into intuitive interfaces.

        </p>
         <NavLink to='https://drive.google.com/file/d/1Mgzm8k1LcTLTs-9KwjPrwQ6IoJrYUAX1/view?usp=sharing'><motion.button  whileHover={{scale:1.2}}  className='btn btn-light ' style={{backgroundColor:'yellow',color:'black',marginLeft:'1rem' ,marginTop:'1rem',width:'10rem',height:"3rem",borderBottom:"0.4rem solid green",fontFamily:'cursive', borderRadius:"0.7rem"}}><b>Resume</b></motion.button></NavLink>
        <NavLink to="/Contact"><motion.button  whileHover={{scale:1.2}} className='btn btn-light' style={{backgroundColor:'yellow',color:'black',marginLeft:'1rem',marginTop:'1rem',width:'10rem',height:"3rem",borderBottom:"0.4rem solid green",borderRadius:"0.7rem",fontFamily:'cursive'}}><b>contact!</b></motion.button></NavLink>
        </div></center>
  
    <Outlet/>  
<hr></hr>
   
    
   

    </div>

    
  )
}
