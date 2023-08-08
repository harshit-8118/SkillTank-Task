import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../App";
import { LoginUser } from "../../authContext/apiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [login, setLogin] = useState(true);
  const [Lemail, setEmail] = useState();
  const [Lpassword, setPassword] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("");
  
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
    if(!username || !password || !email) {
      setIsClicked(false);
      setMessage("inputs can't be empty");
      return;
    }
    setIsClicked(true);
    try {
      await axios
        .post(baseUrl + "auth/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          if (res.data) {
            setMessage("registration successfull")
            setIsClicked(false);
            setLogin(true);
          }
        })
        .catch((err) => {
          setMessage("validate input fields...");
          setIsClicked(false);
        });
    } catch (err) {setMessage("failed to save! try again")}
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let email = Lemail;
    let password = Lpassword;
    if (!email || !password) {
      setMessage("inputs can't be empty");
      setIsClicked(false);
      return;
    }
    setIsClicked(true);
    LoginUser({ email, password }, dispatch);
  };

  useEffect(() => {
    const func = () => {setTimeout(() => {
      setMessage("");
    }, (5000));}
    func(); 
    if (user) {
      setIsClicked(false);
      setMessage("login successfull");
      navigate("/");
    }
  }, [user, message, isClicked]);
  return (
    <div className="login-signup-page">
      <div className="login-signup-form">
        <span className={message?"message":""}>
            {message}
        </span>
        <h1>{login ? "Login" : "Signup"} Form</h1>
        <div className="btns">
          <button
            className={login ? "login-btn clicked-btn" : "login-btn"}
            onClick={() => {
              setIsClicked(false);
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={login ? "signup-btn " : "clicked-btn signup-btn"}
            onClick={() => {
              setIsClicked(false);
              setLogin(false);
            }}
          >
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
              {isClicked ? <FontAwesomeIcon icon={faSpinner} spin /> : null}{" "}
              Login
            </button>
            <span className="not-member">
              not a member?
              <i
                onClick={() => {
                  setIsClicked(false);
                  setLogin(false);
                }}
              >
                signup now
              </i>{" "}
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
            <button className="signup-submit-btn" onClick={handleFinish}>
              {isClicked ? <FontAwesomeIcon icon={faSpinner} spin /> : null}
              Register
            </button>
            <span className="not-member">
              already a member?{" "}
              <i
                onClick={() => {
                  setIsClicked(false);
                  setLogin(true);
                }}
              >
                login now
              </i>{" "}
            </span>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
