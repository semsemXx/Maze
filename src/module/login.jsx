import React, { useState } from 'react';
import classes from '@/css/login.module.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [validationMessages, setValidationMessages] = useState({});

  const navigate = useNavigate();
  
  const toggleActive = () => {
    setIsSignupActive((prev) => !prev);
  };

  const toggleCheckbox = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  const handleCreateAccount = () => {
    const messages = {};
    if (!signupFirstName) messages.firstName = 'First name is required';
    if (!signupLastName) messages.lastName = 'Last name is required';
    if (!signupEmail || !/\S+@\S+\.\S+/.test(signupEmail)) messages.email = 'Valid email is required';
    if (!signupPassword || signupPassword.length < 6) messages.password = 'Password must be at least 6 characters';
    if (!signupPhone || !/^\d{8}$/.test(signupPhone)) messages.phone = 'Valid phone number is required';

    setValidationMessages(messages);

    if (Object.keys(messages).length === 0) {
      setIsAccountCreated(true);
      setTimeout(() => {
        setIsAccountCreated(false);
        toggleActive();
      }, 2500);
    }
  };

  const handleLogin = () => {
    const messages = {};
    if (!loginEmail || !/\S+@\S+\.\S+/.test(loginEmail)) messages.loginEmail = 'Valid email is required';
    if (!loginPassword) messages.loginPassword = 'Password is required';

    setValidationMessages(messages);

    if (Object.keys(messages).length === 0) {
      setIsLoginSuccessful(true);
      setTimeout(() => {
        setIsLoginSuccessful(false);
        navigate('/Main-Page');
      }, 2000);
    }
  };

  const handleForgotPassword = () => {
    navigate('/resetpass');
  };

  return (
    <div className={classes.Login}>
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
            <input
              className={`${classes.mail} ${validationMessages.loginEmail ? classes.errorInput : ''}`}
              type="text"
              placeholder={validationMessages.loginEmail || "Mail or phone number"}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              className={`${classes.pass} ${validationMessages.loginPassword ? classes.errorInput : ''}`}
              type="password"
              placeholder={validationMessages.loginPassword || "Password"}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
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
            <p className={classes.forgot} onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
              Forgot my password?
            </p>
          </div>
        ) : (
          <div className={classes.signupDetails}>
            <input
              className={`${classes.firstname} ${validationMessages.firstName ? classes.errorInput : ''}`}
              type="text"
              placeholder={validationMessages.firstName || "First name"}
              value={signupFirstName}
              onChange={(e) => setSignupFirstName(e.target.value)}
            />
            <input
              className={`${classes.lastname} ${validationMessages.lastName ? classes.errorInput : ''}`}
              type="text"
              placeholder={validationMessages.lastName || "Last name"}
              value={signupLastName}
              onChange={(e) => setSignupLastName(e.target.value)}
            />
            <input
              className={`${classes.email} ${validationMessages.email ? classes.errorInput : ''}`}
              type="email"
              placeholder={validationMessages.email || "Mail"}
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              className={`${classes.password} ${validationMessages.password ? classes.errorInput : ''}`}
              type="password"
              placeholder={validationMessages.password || "Password"}
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input
              className={`${classes.phone} ${validationMessages.phone ? classes.errorInput : ''}`}
              type="text"
              placeholder={validationMessages.phone || "Phone"}
              value={signupPhone}
              onChange={(e) => setSignupPhone(e.target.value)}
            />
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
