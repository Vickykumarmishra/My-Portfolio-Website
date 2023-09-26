import React from 'react'
import { NavLink } from 'react-router-dom'
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
      
      <h3   style={{fontSize:"2em", color:'white',textShadow: '1px 1px 2px black, 0 0 25px lightgreen, 0 0 10px lightgreen',marginBottom:'2rem'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  

</div></center>


<div className="container text-center" style={{marginBottom:"3rem"}}>
  <div class="row">
    <div class="col">
    <div class="row" >

    <div className="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white',marginRight:"1rem"}} >
      <h3    style={{color:'lightgreen',marginTop:'0.5rem'}}>Tourism Website</h3>
     <img  src='buddha.jpg' className='img-fluid' style={{marginTop:'1rem',height:'20rem',width:'30rem'}} alt='....'></img>
     <NavLink to='https://tourism-web-with-react-by-vicky.vercel.app/' ><button className='btn btn-info' style={{marginTop:'1rem'}}><b>Click Here</b></button></NavLink>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row">

    <div className="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white',marginRight:"1rem"}} >
     <h3   style={{color:'lightgreen',marginTop:'0.5rem'}}>Typing Website</h3>
     <img  src='typist.jpg' className='img-fluid' style={{marginTop:'1rem',height:'20rem',width:'30rem'}} alt='....'/>
     <NavLink to='https://my-touch-typing-app.vercel.app/' ><button className='btn btn-info' style={{marginTop:'1rem'}}><b>Click Here</b></button></NavLink>
     
    </div>
  </div>
    </div>

    <div class="col">

    <div class="row">
    <div className="col" style={{border:'0.1rem solid white',boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}}  >
      <h3  style={{color:'lightgreen',marginTop:'0.5rem'}} >Portfolio Website</h3>
     <img src='portfool.jpg' className='img-fluid' style={{marginTop:'1rem',height:'20rem',width:"30rem"}} alt='....' />
     <button className='btn btn-info' style={{marginTop:'1rem'}} onClick={handleclick}><b>Click Here</b></button>
      
    </div>
  </div>
    </div>

  </div>
</div>

{/* <center><NavLink to='/Home'><p style={{backgroundColor:'#42ddf5',marginTop:'1rem',width:"5rem"}}><button style={{backgroundColor:'#42ddf5',border:"0.1rem solid #42ddf5"}} ><b>Go To Home -{'>'} </b></button ></p></NavLink></center> */}

    </div>
  )
}
