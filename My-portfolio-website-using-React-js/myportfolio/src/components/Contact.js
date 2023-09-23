import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import Swal from 'sweetalert2'
//import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
export default function Contact() {
  const form = useRef();
function handleClick(e){
e.preventDefault();
let verify=document.getElementById('inputGroup-sizing-default').value;
let verify2=document.getElementById('exampleFormControlTextarea1').value;

if(verify==''||verify2==''){

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'All details must be filled before sending',
    
  })
}
else{

  emailjs.sendForm('service_uh16qbn','template_gy42hqt',form.current,'FzQ82uEVhnavLDi3H').then((result) => {
    console.log(result.text);
    Swal.fire(
      'Message sent successfully to my email',
      'I will contact you soon 😊',
      'success'
    )
}, (error) => {
    console.log(error.text);
});
    }
  }

  return (
    <div>
     <center><h1 style={{color:'lightgreen',marginTop:'1rem'}}><b>Contact Me</b></h1></center> <br></br>
     {/* <center><p style={{color:'white'}}>
I'm interested in freelance opportunities-especially front end projects.However, if you have other request or question, don't hesitate to contact me.
     </p></center> */}

     {/**form start */}
<form ref={form}>
<center><div  style={{width:'25rem' , border:'0.1rem solid green', padding:'2rem'}}   >
     <div className="input-group">
     <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">FullName</span>
  <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
</div>
<br></br>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Mobile No</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<br></br>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="user email" placeholder="name@example.com"/><br></br>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label" style={{color:'white'}}>Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
</div>
<br></br>
<p style={{backgroundColor:'lightgreen'}} whileHover={{scale:1.2}}  onClick={handleClick}><button style={{backgroundColor:'lightgreen',border:"0.1rem solid lightgreen"}}><b>Send</b></button></p>

</div></center></form>
{/**form ends here */}

<center><NavLink to='/Home'><p style={{backgroundColor:'#42ddf5',marginTop:'1rem',width:"25rem"}}><button style={{backgroundColor:'#42ddf5',border:"0.1rem solid #42ddf5"}} ><b>Go To Home -{'>'} </b></button ></p></NavLink></center>

    </div>
  )
}
