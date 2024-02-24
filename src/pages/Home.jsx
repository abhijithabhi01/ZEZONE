import React, { useEffect, useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Homeessential from '../components/Homeessential'
import './homestyle.css'
import UserHome from '../components/UserHome';
import bckimg from '../Assests/simon-lee-zft-W1kVEhg-unsplash.jpg'
function Home() {
  const[token,setToken] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  })
  return (
    <>
 <div>
    { !token? <div className="main-home" style={{
      backgroundImage:`url(${bckimg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',scrollBehavior:'smooth'
    }}>
      
       <Homeessential/>
      </div>
      :<div>
        <UserHome/>
      </div>
     }
 </div>
    </>
  )
}

export default Home