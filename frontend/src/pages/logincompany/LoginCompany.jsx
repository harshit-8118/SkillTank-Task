import "./loginCompany.scss";

import React, { useState } from "react";

function LoginCompany() {
  const [login, setLogin] = useState(true);
  return (
    <div className="login-page">
      <div className="login-form">
        <h1>Login Form</h1>
        <button className="login-btn" onClick={() => setLogin(true)}>Login</button>
        <button className="signup-btn" onClick={() => setLogin(false)}>Signup</button>
        {login ? (
          <>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <span>forgot password?</span>
            <button className="login-submit-btn">Login</button>
            <span>
              not a member? <i onClick={() => setLogin(false)}>signup now</i>{" "}
            </span>
          </>
        ) : (
          <>
            <input type="username" placeholder="Username" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button className="signup-submit-btn">Register</button>
            <span>
              already a member? <i onClick={() => setLogin(true)}>login now</i>{" "}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginCompany;
