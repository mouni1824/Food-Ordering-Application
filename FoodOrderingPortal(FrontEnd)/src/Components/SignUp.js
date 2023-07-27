// import React, { useState } from 'react';
// import "./Signup.css";
// import UserSignUp from './UserSignUp';
// export default function SignUp() {
//   const [selectedOption, setSelectedOption] = useState('User');

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div className='signup'>
//       <div className='sign-main'>
//         <div className='sign-left'>
//          <div className='left-det'>
//          <h1>Welcome Back</h1>
//          <p>Please choose your role to continue!</p>
//           <select value={selectedOption} onChange={handleOptionChange}>
//             <option value="User">User</option>
//             <option value="Restaurant">Restaurant</option>
//           </select>
//         </div></div>
//         <div className='sign-right'>
//           {selectedOption === 'User' && <UserSignUp />}
//           {selectedOption === 'Restaurant' && <RestaurantContent />}
//         </div>
//       </div>
//     </div>
//   );
// }

// function UserContent() {
//   return <div>User Content</div>;
// }

// function RestaurantContent() {
//   return <div>Restaurant Content</div>;
// }


import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      height:'500px',
      padding: '20px',
      border: 0,
      backgroundColor: '#F7F7F7',
      boxShadow:'2px 2px 4px gray',
      borderRadius: '4px',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border:0,
      marginBottom:'10px',
      textAlign:'center',
      backgroundColor:'gainsboro'
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#ff761a',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '0px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmit(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any previous error messages
        
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputContainer}>
          
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputContainer}>
        
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
        
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/mainhome"><button style={styles.button} type="submit">
            Sign Up
          </button></Link>
        </div>
        <p>
          Already have an account? <Link to="/log">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;