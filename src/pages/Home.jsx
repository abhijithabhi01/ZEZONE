import React, { useEffect, useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Homeessential from '../components/Homeessential'
import './homestyle.css'
import Card from 'react-bootstrap/Card';
import UserHome from '../components/UserHome';

function Home() {
  const[token,setToken] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  })
  return (
    <>
  { !token? <div className="main-home"  style={{height:"100vh"}}>
     <HomeNavbar/>
     <Homeessential/>
    </div>
    :<div>
    
      <UserHome/>
    :</div>
   }
    </>
  )
}

export default Home