import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Swal from "sweetalert2";
export default function Projects() {
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
      
      <h3   style={{fontSize:"2rem", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen',marginBottom:'2rem'}}>My Projects:</h3>



{/* <div classNameName="container text-center" style={{marginBottom:"3rem"}}>
  <div className="row">
    <div className="col">
    <div className="row" >

    <div classNameName="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white',marginRight:"1rem"}} >
      <h3    style={{color:'lightgreen',marginTop:'0.5rem'}}>Tourism Website</h3>
     <img  src='buddha.jpg' classNameName='img-fluid' style={{marginTop:'1rem',height:'20rem',width:'30rem'}} alt='....'></img>
     <NavLink to='https://tourism-web-with-react-by-vicky.vercel.app/' ><button classNameName='btn btn-info' style={{marginTop:'1rem'}}><b>Click Here</b></button></NavLink>
    </div>
  </div>
    </div>
    <div className="col">
    <div className="row">

    <div classNameName="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white',marginRight:"1rem"}} >
     <h3   style={{color:'lightgreen',marginTop:'0.5rem'}}>Typing Website</h3>
     <img  src='typist.jpg' classNameName='img-fluid' style={{marginTop:'1rem',height:'20rem',width:'30rem'}} alt='....'/>
     <NavLink to='https://my-touch-typing-app.vercel.app/' ><button classNameName='btn btn-info' style={{marginTop:'1rem'}}><b>Click Here</b></button></NavLink>
     
    </div>
  </div>
    </div>

    <div className="col">

    <div className="row">
    <div classNameName="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}}  >
      <h3  style={{color:'lightgreen',marginTop:'0.5rem'}} >Portfolio Website</h3>
     <img src='portfool.jpg' classNameName='img-fluid' style={{marginTop:'1rem',height:'20rem',width:"30rem"}} alt='....' />
     <NavLink to="#"><button classNameName='btn btn-info' style={{marginTop:'1rem'}} onClick={handleclick}><b>Click Here</b></button></NavLink>
      
    </div>
  </div>
    </div>

  </div>
</div>

<center><NavLink to='/Home'><p style={{backgroundColor:'#42ddf5',marginTop:'1rem',width:"5rem"}}><button style={{backgroundColor:'#42ddf5',border:"0.1rem solid #42ddf5"}} ><b>Go To Home -{'>'} </b></button ></p></NavLink></center> */}

<div className="container text-center">
  <div className="row">
    <div className="col">
          
    <div className="card" style={{width:'18rem',marginBottom:'2rem'}}>
  <img src="buddha.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tourism website</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="https://tourism-web-with-react-by-vicky.vercel.app/" className="btn btn-primary">Click Here</NavLink>
  </div>
</div>

    </div>
    <div className="col">
      
    <div className="card" style={{width:'18rem',marginBottom:'2rem'}}>
  <img src="typist.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Typing Website</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="https://my-touch-typing-app.vercel.app/" className="btn btn-primary">Click Here</NavLink>
  </div>
</div>

    </div>
    <div className="col">
      
    <div className="card" style={{width:'18rem',marginBottom:'2rem'}}>
  <img src="Portfool.jpg" className="img-fluid" style={{height:"15rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Portfolio Website</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={handleclick}>Click Here</a>
  
  </div>
</div>

    </div>
  </div>
</div>


    </div>
  )
}
