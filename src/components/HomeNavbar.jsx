import React from 'react'
import SettingIcon from './SettingIcon'


function HomeNavbar() {
  return (
    <>
    <div className="d-flex justify-content-between p-2 bg-dark">

        <div className='ms-2'><h3>Username</h3></div>
  
      
      <div><SettingIcon/></div>
    </div>
    </>
  )
}

export default HomeNavbar