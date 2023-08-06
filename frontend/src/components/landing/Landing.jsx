import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./landing.scss";
import React from "react";
import {
  faCompactDisc,
  faCaretDown,
  faComment,
  faShare,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../form/Form";
const semiCircle = require("./semi-circle.png");
const rightPortion = require('./rightPortion.jpg')
const statistics = require('./statistic.png')

function Landing() {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="first">
          Getting you
          <span>4.9</span>
        </div>
        <div className="second">
          <div className="second-img">
            <img
              src="https://media.istockphoto.com/id/1301212030/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=_eRwnFuNhE181f3bXYRh_-4dCFiWATHOybyecUk-6fk="
              alt=""
            />
            <span></span>
          </div>
          <div className="second-dig">
            <img src={semiCircle} alt="" />
            <span>12k</span>
          </div>{" "}
          <span>where you</span>
        </div>
        <div className="third">
          <span>want to study.</span>
          <i>
            <FontAwesomeIcon icon={faShare} />
          </i>
        </div>
        <p className="content-p">
          Everything you need to know for your study abroad journey: from first search to your first day on campus.
        </p>
        <Form />
      </div>
      <div className="landing-right">
        <div className="wrapper-img">
          <img
            src={rightPortion}
            alt=""
          />
          <div className="wrapper-img-box">
            <p>
            <FontAwesomeIcon icon={faComment} />
            </p>
            <span>
              <p className="wib-first">Total Students</p>
              <i>159.58</i>
            </span>
            <i>
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </div>
        </div>
        <div className="landing-right-bottom">
          <div className="card1">
            <p>World Top 10 University</p>
            <div className="circle">
              <img src={statistics} />
              <span>
                <i style={{color: 'black', fontWeight: '600'}}>10</i>
                <i>Rankings</i>
              </span>
            </div>
            <hr />
            <span>
              <i>Graphic Template</i>
              <i>UI Design</i>
            </span>
          </div>
          <div className="card2">
            <span>Earnings Report</span>
            <div className="bottom-right">
              <FontAwesomeIcon icon={faCompactDisc} className="icon" />
              <div>
                <span>Total Students</span>
                <p>78K</p>
              </div>
            </div>
            <div className="bottom-right">
              <FontAwesomeIcon icon={faCompactDisc} className="icon" />
              <div>
                <span>BD Topper Students</span>
                <p>8K</p>
              </div>
            </div>
            <div className="bottom-right">
              <FontAwesomeIcon icon={faCompactDisc} className="icon" />
              <div>
                <span>Contributor Bobus</span>
                <p>706</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded">
          <span><FontAwesomeIcon icon={faArrowUp} /></span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
