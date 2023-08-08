import "./navigation.scss";

import React, { useContext, useState } from "react";
import { FontAwesomeIcon as FA, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCodeFork, faPlaneUp, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { Logout } from "../../authContext/apiCalls";
import { AuthContextCompany } from "../../authCompany/AuthContextCompany";
import { LogoutCompany } from "../../authCompany/apiCallsCompany";
const user_img = require("./user_img.png");
const company_img = require("./company_image.png");

function Navigation() {
  const [isHover, setIsHover] = useState(false);
  const [isClickedMenuBtn, setIsClickedMenuBtn] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const { company, dispatch:companyDispatch } = useContext(AuthContextCompany); 
  const handleLogout = () => {
    if(user)
    Logout(dispatch);
    if(company)
    LogoutCompany(companyDispatch);
  }

  return (
    <div className="navbar">
      <div className="navbar-img">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <span>/</span>
        <div className="navbar-img-content">
          <span>Part of Times</span>
          <span>Higher Education</span>
        </div>
      </div>
      <ul className="navbar-items">
        <li className="navbar-item active">Home</li>
        <li className="navbar-item">Officers</li>
        <li className="navbar-item">Examination</li>
        <li className="navbar-item">Sections</li>
        <li className="navbar-item">Students</li>
        <li className="navbar-item">Academics</li>
      </ul>
      <div className="navbar-item-icons">
        <div className="icon-wrapper">
          <i className="icon">
            <FA icon={faCodeFork} />
          </i>
          <i className="icon">
            <FA icon={faPlaneUp} />
          </i>
        </div>
        <div
          className="navbar-btn"
          onClick={() => setIsClickedMenuBtn(!isClickedMenuBtn)}
        >
          <div className="btn-line"></div>
          {isClickedMenuBtn ? (
            <div className="navbar-menubtn-items">
              <span>Learn</span>
              <span>Mentors</span>
              <span>Compete</span>
              <span>Jobs</span>
            </div>
          ) : null}
        </div>
      </div>
      {!user && !company ? (
        <>
          <button
            className="navbar-login-signup"
            onMouseLeave={() => setIsHover(!isHover)}
            onMouseEnter={() => {
              setIsHover(!isHover);
            }}
          >
           <p>Login / Signup</p>
            {isHover ? (
              <div className="login-signup-dropdown">
                <Link to={"/login"} className="link">
                  <span>Student</span>
                </Link>
                <Link to={"/companylogin"} className="link">
                  <span>Company</span>
                </Link>
              </div>
            ) : null}
          </button>{" "}
        </>
      ) : (
        <button
            className="user-img"
            onMouseLeave={() => setIsHover(!isHover)}
            onMouseEnter={() => {
              setIsHover(!isHover);
            }}
          >
            <div className="user-img-cont">
              <p>{user ? user.username : company.companyname }</p>
              <img src={user? user_img: company_img} alt="" />
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isHover ? (
              <span className="" onClick={handleLogout}>Logout</span>
            ) : null}
          </button>
      )}
    </div>
  );
}

export default Navigation;
