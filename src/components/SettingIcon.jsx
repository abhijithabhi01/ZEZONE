import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function SettingIcon() {
    //settings bar
    const [show, setShow] = useState(false);
    const [showmodal, setShowmodal] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleClosemodal = () => setShowmodal(false);
    const handleShowmodal = () => setShowmodal(true);
  const[token,setToken] = useState(false)
  const {isAuthorized, setIsAuthorized}= useState(true)
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  },[])
  const navigate = useNavigate()
  // logout
  const handleLogout = ()=>{
    //remove existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
   handleClosemodal()
   //navigate to home
   navigate('/')
   window.location.reload();
  }


  return (
    <>
<div className='mb-2' id='settingsicon'>
  <button className='btn' onClick={handleShow}><i class="fa-solid fa-bars fa-2xl m-2 text-light"></i></button>
  
  
  
  <Offcanvas className=' bg-light' show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header className='me-5 fs-4' closeButton>
            <Offcanvas.Title>
              <h1  className='m-3 zezonehover' style={{fontSize:"40px"}}><a href="http://localhost:3000" target="_blank" style={{textDecoration:"none"}}>ZEZONE</a></h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='p-5 m-4'>
           {token? 
          <div className='text-center'>
             <h2 className='m-4 hovertored'><Link to={'/'} >Home</Link></h2>
              <h2 className='m-4 hovertored'><Link to={'/profile'} >profile</Link></h2>
             <button className='hovertored' onClick={handleShowmodal}  style={{ background: 'none', border: 'none', cursor: 'pointer'}}> <h2 >Logout</h2></button>
          </div>
            :
  <div className='text-center'>
    {/* <h2 className='m-4 hovertored' href='#about'>Home</h2>
    <h2 className='m-4 hovertored' href='#about'>About</h2>
    <h2 className='m-4 hovertored'>Features</h2>
    <h2 className='m-4 hovertored'>Contact</h2>
    */}
  </div>
  }
          </Offcanvas.Body>
        </Offcanvas>
  
  
</div>




<Modal show={showmodal} onHide={handleClosemodal} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="success" onClick={handleClosemodal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
           Logout
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default SettingIcon