import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { signUpSchema } from '../schemas/Index'
const initialValues={

name:"",
useremail:"",
mobile:"",
message:"",
}

export default function Contact() {

  

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
initialValues:initialValues,
validationSchema:signUpSchema,
onSubmit:(values,action)=>{
console.log(values);
action.resetForm();
}
})
console.log(errors)

const form = useRef();
function handleClick(e){
// e.preventDefault();
let verify=document.getElementById('inputGroup-sizing-default').value;
let verify2=document.getElementById('exampleFormControlTextarea1').value;
let verify3=document.getElementById('exampleFormControlInput1').value;

if(verify==''||verify2==''||verify3==''){
 
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
    <div  style={{marginBottom:"2rem"}}>
     <center><h1 style={{color:'lightgreen',marginTop:'1rem'}}><b>Contact Me</b></h1></center> <br></br>
     

     {/**form start */}
  
<form ref={form} onSubmit={handleSubmit}>
<center><div  style={{width:'25rem' , border:'0.1rem solid green', padding:'2rem',boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}  className='container'  >
     <div className="input-group">
     <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">FullName</span>
  <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
 
</div>
</div>
{errors.name && touched.name?(<p  style={{color:'red'}}className='form-error'>{errors.name}</p>):null}

<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Mobile No</span>
  <input type="text" value={values.mobile} onChange={handleChange} onBlur={handleBlur}  name="mobile" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<br></br>
{errors.mobile && touched.mobile?(<p  style={{color:'red'}}className='form-error'>{errors.mobile}</p>):null}


<div className="mb-3">
  {/* <label for="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label> */}
  <input type="email" value={values.useremail} onChange={handleChange} onBlur={handleBlur}  className="form-control" id="exampleFormControlInput1" name="useremail" placeholder="Enter your email here"/>
</div>
{errors.useremail && touched.useremail?(<p  style={{color:'red'}}className='form-error'>{errors.useremail}</p>):null}
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label" style={{color:'white'}} >Write your message</label>
  <textarea value={values.message} onChange={handleChange} onBlur={handleBlur}  className="form-control" id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
</div>
<br></br>
{errors.message && touched.message?(<p  style={{color:'red'}}className='form-error'>{errors.message}</p>):null}

<p style={{backgroundColor:'lightgreen'}} whileHover={{scale:1.2}}  onClick={handleClick}><button style={{backgroundColor:'lightgreen',border:"0.1rem solid lightgreen"}}><b><u>Send</u></b></button></p>

</div></center></form>

{/**form ends here */}

{/* <center><NavLink to='/Home'><p style={{backgroundColor:'#42ddf5',marginTop:'1rem',width:"25rem"}}><button style={{backgroundColor:'#42ddf5',border:"0.1rem solid #42ddf5"}} ><b>Go To Home -{'>'} </b></button ></p></NavLink></center> */}

    </div>
  )
}
