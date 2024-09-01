import React, { useState } from "react";
import classes from "@/css/resetpass.module.css";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

export default function Resetpass() {
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsResetEmailSent(true);
    setTimeout(() => {
      setIsResetEmailSent(false);
      navigate('/Login'); 
    }, 2500);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); 
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true); 
  };

  const getObscuredEmail = (email) => {
    const [localPart, domain] = email.split('@');
    const obscuredLocalPart = localPart.slice(0, -3) + '***';
    return `${obscuredLocalPart}@${domain}`;
  };

  return (
    <div className={classes.resetdiv}>
      <p className={classes.resetpass}>Reset your Password</p>
      <p className={classes.please}>Please provide the email address that you used when you signed up for your account</p>
      <p className={classes.forgot}>If you forgot your email, please contact us.</p>
      <input
        className={`${classes.email} ${!isEmailValid ? classes.errorInput : ''}`}
        type="text"
        placeholder={!isEmailValid ? "Invalid email address" : "Enter your email"}
        value={email}
        onChange={handleEmailChange}
      />
      <p className={classes.send}>We will send you an email that will allow you to reset your password.</p>
      <button className={classes.resetbtn} onClick={handleResetPassword}>Reset Password</button>

      {isResetEmailSent && (
        <div className={classes.notification}>
          <FaCheckCircle className={classes.verificationIcon} />
          <p>We've sent a reset link to your email: {getObscuredEmail(email)}</p>
            
        </div>
      )}
    </div>
  );
}
