import React from 'react'
import SettingIcon from './SettingIcon'
import { Link } from 'react-router-dom'
import './style.css'

function HomeNavbar() {
  return (
    <>
    <div className="d-flex justify-content-between p-4 nav-bar">

        <div className='ms-2'><button className='btn text-right btn-light rounded'><Link className='text-decoration-none' to={'/login'}>LOGIN</Link></button></div>
  
      
      <div><SettingIcon/></div>
    </div>
    </>
  )
}

export default HomeNavbar