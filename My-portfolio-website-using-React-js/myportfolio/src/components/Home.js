import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {

 
  

  return (
    <div>
  
        <motion.h1  
         style={{color:'lightgreen'}}> <b >Hello, I am </b></motion.h1><hr/><br></br>
        <motion.h1  animate={{opacity:1,scale:1.2}} 
         initial={{opacity:0}}  
         transition={{delay:0.4,duration:5,repeat:0}}style={{color:'white',fontSize:'5rem',fontFamily:'tahoma',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}}>Vicky Kumar Mishra</motion.h1>
        <center>
        <div style={{marginRight:'5rem',marginLeft:'5rem'}} className='shadow-lg p-3 mb-5 bg-black rounded'>
        <p style={{color:'lightgreen',fontFamily:'tahoma',textShadow: '1px 1px 2px black, 0 0 25px white, 0 0 5px white'}}>
        Welcome to my portfolio! I'm a frontend developer specializing in creating engaging and user-friendly web experiences. With expertise in HTML, CSS, and JavaScript, I transform ideas into functional websites using modern framework like React Js . 
        My portfolio showcases diverse projects that highlight my attention to detail and passion for intuitive interfaces. Let's collaborate to bring your vision to life.

        </p>
         <NavLink to='https://github.com/Vickykumarmishra/My-CV/blob/main/cv%2028%20june%20latest.pdf'><motion.button  whileHover={{scale:1.2}}  className='btn btn-light' style={{backgroundColor:'black',color:'lightgreen'}}>My Resume</motion.button></NavLink>
        <NavLink to="/Contact"><motion.button  whileHover={{scale:1.2}} className='btn btn-light' style={{backgroundColor:'black',color:'lightgreen'}}>contact me!</motion.button></NavLink>
        </div></center>
  
    <Outlet/>  
<hr></hr>
   
    
    <div class="container-sm" style={{color:'white'}}>
    
   


    <div class="container text-center">
  <div class="row">
    <div class="col">
    
    <h3 style={{fontSize:"2em", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen'}}>My Skills:</h3>
    <center><motion.table whileHover={{scale:1.1}} style={{color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 20px lightgreen'}}>
    
    <tr>
    <th style={{color:'lightgreen'}}>Skill</th>
    <th  style={{color:'lightgreen'}}>Level</th>
    <th style={{color:'lightgreen'}}>Experience</th>
    </tr>

    <tr>
      <td>React Js</td>
      <td>Intermediate</td>
      <td>1 years</td>
    </tr>

    <tr>
      <td>Javascript</td>
      <td>Intermediate</td>
      <td>2 years</td>
      <td></td>
    </tr>

    <tr>
      <td>Express</td>
      <td>Beginner</td>
      <td>0.5 years</td>
    </tr>
    <tr>
      <td>Html</td>
      <td>Intermediate</td> 
      <td>2 years</td>
    </tr>

    <tr>
      <td>Css</td>
      <td>Intermediate</td>
      <td>2 years</td>
    </tr>

    <tr>
      <td>Mongodb</td>
      <td>Beginner</td>
      <td>0.5 years</td>
    </tr>
    
    

    </motion.table></center><hr style={{color:'lightgreen'}}></hr>


    </div>
    <div class="col">
      <motion.img  whileHover={{scale:1.1}} src='formal black.jpg' className='img-thumbnail' style={{borderRadius:"50%",height:'25rem',border:'0.1rem solid black'}}></motion.img>
    </div>

  </div>
</div>
</div>

{/** projects*/}
<h3   style={{fontSize:"2em", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  

  

</div></center>


<div className="container text-center">
  <div class="row">
    <div class="col">
    <div class="row" >
    <div class="col" >
      <NavLink to='https://my-tourism-website-of-bihar.netlify.app/'><motion.h3  whileHover={{color:'yellow'}}  transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Tourism Website</motion.h3></NavLink>
     <NavLink to='https://my-tourism-website-of-bihar.netlify.app/'><motion.img whileHover={{scale:1.1,transform:'rotatey(180deg)'}} transition={{duration:1}} src='buddha.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',width:'30rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
     
    </div>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row">
    <div class="col" >
      <NavLink to='https://vicky-touch-typing.netlify.app/'><motion.h3  whileHover={{color:'yellow'}}  transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Typing Website</motion.h3></NavLink>
     <NavLink to='https://vicky-touch-typing.netlify.app/'><motion.img whileHover={{scale:1.1,transform:'rotatey(180deg)'}} transition={{duration:1}}src='typist.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      
    </div>
    </div>
  </div>
    </div>

    <div class="col">

    <div class="row">
    <div class="col" >
      <NavLink to='https://takcart-my-shopping-app.netlify.app'><motion.h3  whileHover={{color:'yellow'}}  transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Shopping website</motion.h3></NavLink>
     <NavLink to='https://takcart-my-shopping-app.netlify.app'><motion.img whileHover={{scale:1.1,transform:'rotatey(180deg)'}} transition={{duration:1 }} src='takcart portfolio.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      
    </div>
    </div>
  </div>
    </div>

  </div>
</div>
    </div>

    
  )
}
