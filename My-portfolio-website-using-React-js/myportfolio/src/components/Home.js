import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'
import Swal from "sweetalert2";
export default function Home() {

 function handleclick(){

  Swal.fire({
    title: 'Hey!',
    text: 'You are on same website for which you are looking.',
    imageUrl: 'portfool.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    color:'red',
  })

 }
  

  return (
    <div>
  
        <motion.h1  
         style={{color:'lightgreen'}}> <b >Hello, I am </b></motion.h1><hr/><br></br>
        <h1  
         style={{color:'white',fontSize:'5rem',fontFamily:'tahoma',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}} data-aos="fade-left"  data-aos-duration="2000">Vicky Kumar Mishra</h1>
        <center>

        <div  style={{marginRight:'5rem',marginLeft:'5rem'}} className='shadow-lg p-3 mb-5 bg-black rounded'>
        <p style={{color:'lightgreen',fontFamily:'tahoma'}}>
        Welcome to my portfolio! I'm a frontend developer specializing in creating engaging and user-friendly web experiences. With expertise in HTML, CSS, and JavaScript, I transform ideas into functional websites using modern framework like React Js . 
        My portfolio showcases diverse projects that highlight my attention to detail and passion for intuitive interfaces. Let's collaborate to bring your vision to life.

        </p>
         <NavLink to='https://drive.google.com/file/d/1Mgzm8k1LcTLTs-9KwjPrwQ6IoJrYUAX1/view?usp=sharing'><motion.button  whileHover={{scale:1.2}}  className='btn btn-light' style={{backgroundColor:'black',color:'lightgreen',marginTop:'1rem'}}>Resume</motion.button></NavLink>
        <NavLink to="/Contact"><motion.button  whileHover={{scale:1.2}} className='btn btn-light' style={{backgroundColor:'black',color:'lightgreen',marginLeft:'1rem',marginTop:'1rem'}}>contact me!</motion.button></NavLink>
        </div></center>
  
    <Outlet/>  
<hr></hr>
   
    
    <div className="container-sm" style={{color:'white',backgroundColor:'grey'}}>
    
   


    <div className="container text-center" style={{marginBottom:'2rem'}}>
  <div className="row" data-aos="fade-up"  data-aos-duration="1500">
    <div className="col" style={{marginTop:'1rem',marginBottom:'2rem' }}>
    

    <h3 style={{fontSize:"2rem", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen',marginBottom:"2rem"}}>My Skills:</h3>
    <div className='container' >
    <img whileHover={{scale:'1.1'}} src='html-5.png' style={{height:'5rem'}}></img>
    <img src='csss.png' whileHover={{scale:'1.1'}}  style={{height:'5rem'}}></img>
    <img src='java-script.png' whileHover={{scale:'1.1'}}  style={{height:'5rem'}}></img>
    <img src='logo192.png' whileHover={{scale:'1.1'}} style={{height:'5rem'}}></img>
    <img src='bootstrap.png' whileHover={{scale:'1.1'}}   style={{height:'5rem'}}></img>
    <img src="c++.png" whileHover={{scale:'1.1'}}  style={{height:'5rem',marginLeft:'0.4rem'}}></img>
    <img src='redhux.svg' whileHover={{scale:'1.1'}}  style={{height:'5rem',marginLeft:'0.4rem'}}></img></div>
    


    </div>
    {/* <div className="col" style={{marginTop:'1rem' ,marginBottom:'2rem'}}>
      <center><img   src='formal cv image.png' className='img-fluid' style={{borderRadius:"100%",height:'15rem'}}></img></center>
    </div> */}

  </div>
</div>
</div>

{/** projects*/}
<h3   data-aos="fade-up" data-aos-duration="1500" style={{fontSize:"2em", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  

  

</div></center>


<div className="container text-center">
  <div class="row">
    <div class="col">
    <div class="row" >
    <div class="col" >
      <NavLink to='https://tourism-web-with-react-by-vicky.vercel.app/'><motion.h3  data-aos="fade-up" data-aos-duration="1500" whileHover={{color:'yellow'}}  transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}><u>Tourism Website</u></motion.h3></NavLink>
     <NavLink to='https://tourism-web-with-react-by-vicky.vercel.app/'><img data-aos="fade-up" data-aos-duration="1500" src='buddha.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',width:'30rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....'/></NavLink>
     
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row">
    <div class="col" >
      <NavLink to='https://typing-web-by-vicky.netlify.app/'><motion.h3  whileHover={{color:'yellow'}} data-aos="fade-up" data-aos-duration="1500" transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}><u>Typing Website</u></motion.h3></NavLink>
     <NavLink to='https://typing-web-by-vicky.netlify.app/'><img data-aos="fade-up" data-aos-duration="1500" src='typist.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      
    </div>
    </div>
  </div>
    </div>

    <div class="col">

    <div class="row">
    <div class="col" >
      <motion.h3 data-aos="fade-up" data-aos-duration="1500" whileHover={{color:'yellow'}}  transition={{duration:1 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}} onClick={handleclick}><u>portfolio Website</u></motion.h3>
     <img data-aos="fade-up" data-aos-duration="1500" src='portfool.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}} alt='....' onClick={handleclick}/>
     
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
