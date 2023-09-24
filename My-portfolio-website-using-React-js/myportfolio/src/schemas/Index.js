import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  mobile:Yup.number().min(10).max(10).required("Please enter your mobile no"),
  useremail: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(10).max(60).required("Please enter your message"),
  
    
});