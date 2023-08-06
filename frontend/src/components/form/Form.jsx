import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './form.scss';

import React from 'react'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
const courses = require('./courses.jpg');

function Form() {
  return (
    <div className='formContainer'>
      <div className="form-heading">
        <div className="form-heading-item">
            <img src={courses} alt='' /> <span>Courses</span>
        </div>
        <div className="form-heading-item">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0-bV_eKp0Jp15uA0YI4e3cbTQu9KgoH9iA&usqp=CAU' alt='' /> Services
        </div>
      </div>
      <div className="form-input">
        <span>Subject</span>
        <input type='text' placeholder='where you want to study?'/>
      </div>
      <div className="form-input">
        <span>Where</span>
        <input type='text' placeholder='your ideal country / region or institution'/>
        <div className="form-input-search">
            <i><FontAwesomeIcon icon={faSearch} /></i>
            <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Form
