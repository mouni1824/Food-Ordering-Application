import React, { useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import "./Register.css"
export default function Register() {


   const[username,setUsername] = useState('');
   const[usernameMessage,setUsernameMessage] = useState('');
   const[password,setPassword] = useState('');
   const[passwordMessage,setPasswordMessage] = useState('');
   const[confirmpassword,setConfirmPassword] = useState('');
   const[confirmPasswordMessage,setConfirmPasswordMessage] = useState('');
   const[contact,setContact] = useState('');
   const[contactMessage,setContactMessage] = useState('');
   
  
  function handleChange(e){
    setPassword(e.target.value);
  }

  const handleValidation = (e) =>{

    e.preventDefault();
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(username.length<8){
      setUsernameMessage("*Username must be atleast 8 Characters*");
    }
    if(contact.length<10){
      setContactMessage("*Contact Number must contain 10 digits*");
    }
    if(!passwordregex.test(password)){
      setPasswordMessage("*Password not Valid*");
    }
    if(password!=confirmpassword){
      setConfirmPasswordMessage("*Password doesn't match*");
    }

  }
   

  return (
    <div className='signup' >
    
    <div className='main-reg'>
    <br></br>
    <center><h2>Sign Up</h2></center>
    <form onSubmit={handleValidation} >
      
      <center><div className='row'>
       <input type='text' placeholder='Username' name='username' onChange={handleChange} ></input>
       <p>{usernameMessage}</p>
      </div></center>

      <center>
      <div className='row'>
       <input type='email' placeholder='Email' name='email' onChange={handleChange} ></input>
      </div></center>

      <center>
      <div className='row'>
       <input type='text' placeholder='Contact Number' name='contact' onChange={handleChange}></input>
       <p>{contactMessage}</p>
      </div></center>

      <center>
      <div className='row'>
       <input type='password' placeholder='Password' name="password" onChange={handleChange}></input>
       <p>{passwordMessage}</p>
      </div></center>

      <center>
      <div className='row'>
       <input type='password' placeholder='Confirm Password' name="cpassword" onChange={handleChange}></input>
       <p>{confirmPasswordMessage}</p>
      </div></center>

      <center>
      <br></br>
      <div className='row-button'>
       <input type='submit' placeholder='Sign Up'></input>
      </div></center>
      <br></br>
      <center>Already have an account?<a href='#'>Login</a></center>
<br></br>
    <center>
    <div  className='row'>
      <GoogleOAuthProvider clientId="892606897159-dhjnebhbkb0q9bhlnf0c20l815f21adc.apps.googleusercontent.com">
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
      </GoogleOAuthProvider></div></center>
   
    
    </form> </div>
    
    </div>
  )
}
