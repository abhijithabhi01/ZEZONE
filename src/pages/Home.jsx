import React, { useEffect, useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Homeessential from '../components/Homeessential'
import './homestyle.css'
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