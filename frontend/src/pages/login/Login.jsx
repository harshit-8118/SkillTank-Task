import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../App";
import { LoginUser } from "../../authContext/apiCalls";

function Login() {
  const [login, setLogin] = useState(true);
  const [Lemail, setEmail] = useState();
  const [Lpassword, setPassword] = useState();

  const { user, dispatch } = useContext(AuthContext);

  const [Remail, setREmail] = useState("");
  const [Rpassword, setRPassword] = useState("");
  const [Rusername, setRUsername] = useState("");
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();
    let username = Rusername;
    let password = Rpassword;
    let email = Remail;
    try {
      await axios.post(baseUrl + "auth/register", {
        username,
        email,
        password,
      });
      setLogin(true)
    } catch (err) {}
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let email = Lemail;
    let password = Lpassword;
    LoginUser({ email, password }, dispatch);
  };

  useEffect(() => {
    if(user){
      navigate('/')
    }
  })
  return (
    <div className="login-signup-page">
      <div className="login-signup-form">
        <h1>{login ? 'Login' : 'Signup'} Form</h1>
        <div className="btns">
        <button className={login ? 'login-btn clicked-btn': "login-btn"} onClick={() => {setLogin(true)}}>
          Login
        </button>
        <button className={login ? 'signup-btn ': "clicked-btn signup-btn"} onClick={() =>{setLogin(false)}}>
          Signup
        </button>
        </div>
        {login ? (
          <div className="login-form">
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="forgot">forgot password?</span>
            <button className="login-submit-btn" onClick={handleLogin}>
              Login
            </button>
            <span className="not-member">
              not a member?
              <i onClick={() =>{setLogin(false);}}>signup now</i>{" "}
            </span>
          </div>
        ) : (
          <form className="signup-form">
             <input
              type="text"
              placeholder="Username"
              onChange={(e) => setRUsername(e.target.value)}
            />
             <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setREmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setRPassword(e.target.value)}
            />
            <button className="signup-submit-btn" onClick={handleFinish}>Register</button>
            <span className="not-member">
              already a member? <i onClick={() =>{setLogin(true)}}>login now</i>{" "}
            </span>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
