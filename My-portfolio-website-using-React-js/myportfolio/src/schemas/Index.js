import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  mobile:Yup.string().matches(/^\d{10}$/, 'Mobile number must be 10 digits').required("Please enter your mobile no"),
  useremail: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(10).max(60).required("Please enter your message"),
  
    
});