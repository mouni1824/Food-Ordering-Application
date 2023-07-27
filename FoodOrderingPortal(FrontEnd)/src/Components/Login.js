import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  login: {
    width: '400px',
    height:'500px',
    padding: '40px',
    boxShadow: '2px 2px 4px gray',
    borderRadius: '4px',
    backgroundColor: '#F7F7F7',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: 0,
    textAlign:'center',
    backgroundColor:'gainsboro'

  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#ff761a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'20px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
  selected:{
    width:'419px',
    height:'40px',
    border:0,
    backgroundColor:'gainsboro',
    textAlign:'center',
    color:'gray',
    fontSize:18,
    borderRadius:10
  }
};
function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e, option) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      // Navigate based on the selected option
      if (option === 'user') {
        navigate("/mainhome");
      } else if (option === 'restaurant') {
        navigate("/restaurantpage");
      } else if (option === 'admin') {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  const [selectedOption, setSelectedOption] = useState('user');

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={(e) => check(e, selectedOption)}>
          <h2 style={styles.title}>Login</h2><br/>
          {/* Add dropdown/select for user options */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Select Role:</label>
            <select
              style={styles.selected}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="user">Customer</option>
              <option value="restaurant">Restaurant</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <br/><br/><br/>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/mainhome')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);