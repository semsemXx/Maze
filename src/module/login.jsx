import React, { useState } from 'react';
import classes from '@/css/login.module.css';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false); 
  const navigate = useNavigate(); 
  const toggleActive = () => {
    setIsSignupActive((prev) => !prev);
  };

  const toggleCheckbox = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  const handleCreateAccount = () => {
    setIsAccountCreated(true);
    setTimeout(() => {
      setIsAccountCreated(false);
      toggleActive();
    }, 2500);
  };

  const handleLogin = () => {
    setIsLoginSuccessful(true);

    
    setTimeout(() => {
      setIsLoginSuccessful(false);
      navigate('/Main-Page'); 
    }, 2000);
  };

  return (
    <div>
      <div className={classes.topBar}>Free shipping for your first order!</div>
      <div className={`${classes.LoginDiv} ${isAccountCreated || isLoginSuccessful ? classes.blur : ''}`}>
        <button
          className={`${classes.signupbut} ${isSignupActive ? classes.active : ''}`}
          onClick={toggleActive}
        >
          Signup
        </button>
        <button
          className={`${classes.loginbut} ${!isSignupActive ? classes.active : ''}`}
          onClick={toggleActive}
        >
          Login
        </button>

        {!isSignupActive ? (
          <div className={classes.loginDetails}>
            <input className={classes.mail} type="text" placeholder="Mail or phone number" />
            <input className={classes.pass} type="password" placeholder="Password" />
            <button className={classes.loginclick} onClick={handleLogin}>
              LOGIN
            </button>
            <div className={classes.rememberSection}>
              <label>
                <span className={classes.remember}>Remember me</span>
                <button
                className={`${classes.checkbox} ${isCheckboxChecked ? classes.checked : ''}`}
                onClick={toggleCheckbox}
              >
                {isCheckboxChecked ? '?' : '?'}
              </button>
              </label>
            </div>
            <p className={classes.forgot}>Forgot my password?</p>
          </div>
        ) : (
          <div className={classes.signupDetails}>
            <input className={classes.firstname} type="text" placeholder="First name" />
            <input className={classes.lastname} type="text" placeholder="Last name" />
            <input className={classes.email} type="email" placeholder="Mail" />
            <input className={classes.password} type="password" placeholder="Password" />
            <input className={classes.phone} type="text" placeholder="Phone" />
            <button className={classes.create} onClick={handleCreateAccount}>
              CREATE
            </button>
          </div>
        )}
      </div>

      {isAccountCreated && (
        <div className={classes.notification}>
          <p>Your account has been created successfully!</p>
        </div>
      )}

      
      {isLoginSuccessful && (
        <div className={classes.notification}>
          <p>Logged in successfully!</p>
        </div>
      )}
    </div>
  );
}
