import React, { useEffect, useState } from 'react'
import SettingIcon from './SettingIcon'
import { Link } from 'react-router-dom'
import './style.css'
import {getalluserssearchAPI } from '../Services/allAPI'
import Dropdown from 'react-bootstrap/Dropdown';


function HomeNavbar({isNavbarVisible}) {


  
  const [token,setToken] = useState(false)
  const [username,setUsername] = useState("")
  const [searchuser,setsearchuser] = useState("")
  const[allusers,setallusers] = useState([])
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
   
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
   
  };


  const getallusers = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getalluserssearchAPI(searchuser,reqHeader)
    if(result.status===200){
      setallusers(result.data)
    }
    }
  }

  
useEffect(()=>{
    getallusers()
 
},[searchuser])

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  },[])
  useEffect(()=>{
    if(sessionStorage.getItem('existingUser')){
      setUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
    }
  },[])
  //console.log(username);
  
  
  return (

    <>
  {isNavbarVisible?   <div className='nav2 d-flex justify-content-between' >
   <button type='button' className='btn hovertored'> <h2 className=''><Link to={'/'} className='text-light' style={{textDecoration:'none'}}><i class="fa-solid fa-arrow-left"></i>Home</Link></h2></button>
<p id='disappearicon' className='mt-3' style={{display:isInputFocused?'none':'block'}}> <SettingIcon/></p></div>
  
  :<div className="navbar d-flex justify-content-between p-1 bg-primary">
    <div className='closebtn mb-4 fs-1 rounded' style={{backgroundColor:'white',display:isInputFocused?'block':'none'}}>  <button className='btn text-danger fs-3' onClick={handleClose}>
         <i class="fa-solid fa-x fa-beat"></i>
        </button> </div>    
     <div className='nav1'>
         {token?  <div className='profile-btn ms-2 mb-4' style={{display:isInputFocused?'none':'block'}}>
          <button className='btn mt-3 text-right btn-light rounded fs-1'>
            <Link className='text-decoration-none ' to={'/profile'}>{username}</Link>
            </button>
            </div>:

      <div className='ms-2'><button type='button' className='btn text-right btn-light rounded'>
        <Link className='text-decoration-none' to={'/login'}>LOGIN</Link></button></div>
    }
     </div>

  
      
      <div className='nav2 d-flex' >
     {token && 
      <div className='dropdown text-end'>
        
  

        <Dropdown>
      <Dropdown.Toggle style={{background:'transparent'}} id="dropdown-basic">
        
<input type="text" name="text" class="searchinput" 
onChange={(e)=>setsearchuser(e.target.value)} 
value={setsearchuser.searchuser}
placeholder="Search User"
onFocus={handleInputFocus}
onBlur={handleInputBlur}></input>
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-dark text-light mt-2' style={{display:searchuser?'block':'none',height:'400px'}}>
  {searchuser ? (
    allusers.length > 0 ? (
      allusers.map((item) => (
        <Dropdown.Item key={item.username} >
          <Link to={`/userprofile/${item.username}`} className='text-info fs-1 text-center' style={{ textDecoration: 'none' }}>
            {item.username}
          </Link>
        </Dropdown.Item>
      ))
    ) : (
      <h1 className='text-center text-light mt-5'>User not found</h1>
    )
  ) : (
    <h1 className='text-center text-light mt-5' style={{display:'none'}}></h1>
  )}
</Dropdown.Menu>

    </Dropdown>

</div>}
       <p id='disappearicon' className='mt-3'> <SettingIcon/></p></div>
       
    </div>}
    
    </>
    
  )
  
}
  
export default HomeNavbar