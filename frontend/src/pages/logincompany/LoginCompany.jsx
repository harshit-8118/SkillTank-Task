import { useNavigate } from "react-router-dom";
import "./loginCompany.scss";

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../App";
import { AuthContextCompany } from "../../authCompany/AuthContextCompany";
import { LoginOrganisation } from "../../authCompany/apiCallsCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoginCompany() {
  const [login, setLogin] = useState(true);
  const [Lemail, setEmail] = useState();
  const [Lpassword, setPassword] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("");

  const { company, dispatch } = useContext(AuthContextCompany);

  const [Remail, setREmail] = useState("");
  const [Rpassword, setRPassword] = useState("");
  const [Rusername, setRUsername] = useState("");
  const [RSpecialisation, setRSpecialisation] = useState("");
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();
    let companyname = Rusername;
    let companypassword = Rpassword;
    let companyemail = Remail;
    let companyspecialisation = RSpecialisation;
    if (
      !companyname ||
      !companypassword ||
      !companyemail ||
      !companyspecialisation
    ) {
      setIsClicked(false);
      setMessage("inputs can't be empty");
      return;
    }
    setIsClicked(true);
    try {
      await axios
        .post(baseUrl + "company/register", {
          companyname,
          companyemail,
          companypassword,
          companyspecialisation,
        })
        .then((res) => {})
        .catch((err) => {
          setMessage("validate input fields...");
          setIsClicked(false);
          return;
        });
        setMessage("registration successfull");
        setIsClicked(false);
        setLogin(true);
    } catch (err) {
      setMessage("failed to save! try again");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let companyemail = Lemail;
    let companypassword = Lpassword;
    if (!companyemail || !companypassword) {
      setMessage("inputs can't be empty");
      setIsClicked(false);
      return;
    }
    setIsClicked(true);
    LoginOrganisation({ companyemail, companypassword }, dispatch);
  };

  useEffect(() => {
    const func = () => {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    };
    func();
    if (company) {
      setIsClicked(false);
      setMessage("login successfull");
      navigate("/");
    }
  }, [company, message, isClicked]);
  return (
    <div className="loginC-signup-page">
      <div className="loginC-signup-form">
        <span className={message?"message":""}>
            {message}
        </span>
        <h3>Organisation</h3>
        <h1>{login ? "Login" : "Signup"} Form</h1>
        <div className="btns">
          <button
            className={login ? "loginC-btn clicked-btn" : "loginC-btn"}
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
          <div className="loginC-form">
            <input
              type="email"
              placeholder="organisation mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="organisation password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="forgot">forgot password?</span>
            <button className="loginC-submit-btn" onClick={handleLogin}>
            {isClicked ? <FontAwesomeIcon icon={faSpinner} spin /> : null}{" "} Login
            </button>
            <span className="not-member">
              not registered?
              <i
                onClick={() => {
                  setIsClicked(false);
                  setLogin(false);
                }}
              >
                Register now
              </i>{" "}
            </span>
          </div>
        ) : (
          <form className="signup-form">
            <input
              type="text"
              placeholder="organisation name"
              onChange={(e) => setRUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="organisation mail"
              onChange={(e) => setREmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="organisation specialisation"
              onChange={(e) => setRSpecialisation(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setRPassword(e.target.value)}
            />
            <button className="signup-submit-btn" onClick={handleFinish}>
            {isClicked ? <FontAwesomeIcon icon={faSpinner} spin /> : null}{" "} Register
            </button>
            <span className="not-member">
              already registered?{" "}
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

export default LoginCompany;
