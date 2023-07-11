import React from 'react'
import "./SignUp.css";
import { useState } from 'react';
export default function SignUp() {
  


  const[username,setUsername] = useState(''); 
  const[uMessage,setUMessage] = useState('');
  const[password,setPassword] = useState('');
  const[passwordMessage,setPasswordMessage] = useState('')
  const[confirmpassword,setConfirmPassword] = useState('')
  const[cpasswordMessage,setCPasswordMessage] = useState('')
  const[contact,setContact] = useState('');
  const[contactMessage,setContactMessage] = useState('')

  function handleChange(e) {
    setPassword(e.target.value)
  }

  const handleValidation = (e) => {

    e.preventDefault();
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(username.length<8){
        setUMessage("Username must be atleast 8 Characters")
    }
    if(contact.length<10){
        setContactMessage("Phone number not valid")
    }

    if(!passwordregex.test(password)){
        setPasswordMessage("Password is not valid ")
    }

    if(password!=confirmpassword){
        setCPasswordMessage("Password doesn't match")
    }


  }

  return (
    <div className='container' >
    <div className='main'>
    
    <form onSubmit={handleValidation} >

    <center> <h3>Create an Account</h3></center>
    
    <center><div className='row'>
     <input type = "text" placeholder='Username' name = "username"></input>
    <b> <p>{uMessage}</p> </b>
     </div></center>


   <center> <div className='row'>
     <input type = "email" placeholder='Email' name = "email"></input>
    </div></center>

    <center><div className='row'>
     <input type = "password" placeholder='Password' name = "password"  
     onChange={handleChange}></input>
     <b><p>{passwordMessage}</p></b> 
     </div></center>

    <center><div className='row'>
     <input type = "password" placeholder='Confirm Password' name = "confirmpassword"></input>
    <b><p>{cpasswordMessage}</p></b>
     </div></center>

    <center><div className='row'>
    <input type = "text" placeholder='Contact Number' name = "contact"></input>
    <b><p>{contactMessage}</p></b>
     </div></center>
     <br></br>
     <br></br>
     <br></br>
     <div className='row-signup'>
    <center><input type='submit' value = "Sign Up"></input></center>
    </div>
    </form>
    </div>


    <div className='side'>  
    </div>
    </div>
  )
}
