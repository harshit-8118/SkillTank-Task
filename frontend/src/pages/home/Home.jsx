import React from 'react'
import './home.scss';
import Navigation from '../../components/navigation/Navigation';
import Landing from '../../components/landing/Landing';
import Login from '../login/Login';

function Home() {
  return (
    <div className='homeContainer'>
        <Navigation /> 
        <Landing />
        {/* <Login /> */}
    </div>
  )
}

export default Home
