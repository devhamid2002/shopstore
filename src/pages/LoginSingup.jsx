import React from "react";
import "./CSS/LoginSingup.css";
function LoginSingup() {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">
          Alread have an account ? <span>Login here</span>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSingup;
