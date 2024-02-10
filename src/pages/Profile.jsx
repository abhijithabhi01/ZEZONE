import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import HomeNavbar from '../components/HomeNavbar'
import './homestyle.css'

function Profile() {

  const[isNavbarVisible,setisNavbarVisible] = useState(true)
 
  return (
    <>
     <div className='home-profile bg-primary'>
        <HomeNavbar isNavbarVisible={isNavbarVisible}/>
        <Dashboard/>
     </div>
   
    </>
  )
}

export default Profile