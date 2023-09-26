import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Swal from "sweetalert2";
export default function Projects() {
    function handleclick(){

        Swal.fire({
          title: 'Hey!',
          text: 'You are on same website for which you are looking.',
          imageUrl: 'portfool4.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          color:'red',
        })
      
       }
  return (

    <center>
    <div className='container'>
      
      <h2   style={{fontSize:"3rem", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen',marginBottom:'2rem'}}>My Projects:</h2>





<div className="container text-center">
  <div className="row">
    <div className="col">
          
    <div className="card" style={{width:'18rem',marginBottom:'2rem',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}>
  <img src="buddha.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"darkgreen"}}><b>Tourism website</b></h5>
    <b><p>Techstack:- React js, Redux Toolkit,Javascript,Auth0,Mongodb,Node,Express</p></b>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="https://tourism-web-with-react-by-vicky.vercel.app/" className="btn btn-primary">Click Here</NavLink>
  </div>
</div>

    </div>
    <div className="col">
      
    <div className="card" style={{width:'18rem',marginBottom:'2rem',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}>
  <img src="typist.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title"  style={{color:"darkgreen"}}><b>Typing Website</b></h5>
    <b><p>Techstack:- React js,Javascript,Auth0,Html and Css</p></b>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.its a nice website</p>
    <NavLink to="https://my-touch-typing-app.vercel.app/" className="btn btn-primary">Click Here</NavLink>
  </div>
</div>

    </div>
    <div className="col">
      
    <div className="card" style={{width:'18rem',marginBottom:'2rem',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}>
  <img src="portfool4.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"darkgreen"}}><b>Portfolio Website</b></h5>
    <b><p>Techstack:- React js,Javascript,Emailjs,Html and css</p></b>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.its anice website</p>
    <a href="#" className="btn btn-primary" onClick={handleclick}>Click Here</a>
  
  </div>
</div>

    </div>
  </div>
</div>


    </div></center>
  )
}
