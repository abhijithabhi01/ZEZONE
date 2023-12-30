import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Homeessential from '../components/Homeessential'
import './homestyle.css'

function Home() {
  return (
    <>
    <div className="main-home"  style={{height:"100vh"}}>
     <HomeNavbar/>
     <Homeessential/>
    </div>
    
   
    </>
  )
}

export default Home