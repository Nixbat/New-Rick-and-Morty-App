import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Login.css"
import logo from "../../assets/logo-rm.png"


const Login = ( { onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    if (email.length === 0) {
      setEmailError("Email is required");
      setEmailValid(false);
      return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      setEmailError("Email is invalid");
      setEmailValid(false);
      return false;
    }
    setEmailError("");
    setEmailValid(true);
    return true;
  };

  const validatePassword = () => {
    if (password.length === 0) {
      setPasswordError("Password is required");
      setEmailValid(false);
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characteres long");
      setPasswordValid(false);
      return false;
    }
    setPasswordError("");
    setPasswordValid(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Credentials for Login
    const validEmail = "test@example.com";
    const valiPassword = "password123";
  
    if (isEmailValid && isPasswordValid) {
      if (email === validEmail && password === valiPassword) {
        onLogin(true);
        navigate('/home');
      } else {
        setEmailError("Invalid email or password");
        setPasswordError("invalid email or password");
      }
    } 
  }


  return (
    <div className='login'>
      <img src={logo} alt="logo" />
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email" placeholder='Email:   test@example.com' value={email} onChange={handleEmailChange} onBlur={validateEmail} />
            {emailError && <div className='error'>{emailError}</div>}
            {emailValid && <div className='success'><i className="fa-solid fa-circle-check"></i></div>}
          </div>

          <div>
            <input type="password" placeholder='Password:   password123' value={password} onChange={handlePasswordChange} onBlur={validatePassword} />
            {passwordError && <div className='error'>{passwordError}</div>}
            {passwordValid && <div className='success'><i className="fa-solid fa-circle-check"></i></div>}
          </div>

          <button>Login</button>
        </form>
      </div>      
    </div>
  )
};

export default Login;