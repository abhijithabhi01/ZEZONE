import React, { useEffect, useState } from 'react'
import SettingIcon from './SettingIcon'
import { Link } from 'react-router-dom'
import './style.css'

function HomeNavbar() {
  const [token,setToken] = useState(false)
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  },[])
  useEffect(()=>{
    if(sessionStorage.getItem('existinguser')){
      setUsername(JSON.parse(sessionStorage.getItem('existinguser')).username)
    }
  },[])
  console.log(username);
  return (
    <>
    <div className="navbar d-flex justify-content-between p-4">

       {token?  <div className='ms-2'><button className='btn text-right btn-light rounded'><Link className='text-decoration-none' to={'/profile'}>{username}</Link></button></div>
   :
    <div className='ms-2'><button className='btn text-right btn-light rounded'><Link className='text-decoration-none' to={'/login'}>LOGIN</Link></button></div>
  }
      
      <div className='d-flex'>
     {token && <div className='search d-flex'>
      <i class="fa-solid fa-magnifying-glass magnifying-glass"></i>
        <input type="text"  class="form-control" placeholder="Search" />
      </div>}
        <SettingIcon/></div>
    </div>
    </>
  )
}

export default HomeNavbar