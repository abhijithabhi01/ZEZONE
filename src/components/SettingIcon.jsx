import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteuserAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';


function SettingIcon() {
    //settings bar
    const [show, setShow] = useState(false);
    const [showmodal, setShowmodal] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleClosemodal = () => setShowmodal(false);
    const handleShowmodal = () => {setShowmodal(true); handleClose()}
  const[token,setToken] = useState(false)
  const {isAuthorized, setIsAuthorized}= useState(true)
  const [userId,setUserId] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  },[])
  const navigate = useNavigate()
  // logout
  const handleLogout = ()=>{
   
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
   handleClosemodal()

   navigate('/')
   window.location.reload();
  }

  const [showdeletemodal, setshowdeletemodal] = useState(false);

    const handleClosedeletemodal = () => setshowdeletemodal(false);
    const handleShowdeletemodal = () => { setshowdeletemodal(true); handleClose()}
    useEffect(()=>{
      if(sessionStorage.getItem('existingUser')){
        setUserId(JSON.parse(sessionStorage.getItem('existingUser'))._id)
      }
    },[])
   // console.log(userId);

   //delete user
    const handleDelete = async(id)=>{
      const token = sessionStorage.getItem("token")
      const reqHeader ={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    } 
    
    const result = await deleteuserAPI(id,reqHeader)
    if(result.status===200){
      toast.success('Account deleted')
      sessionStorage.removeItem("existingUser")
      sessionStorage.removeItem("token")
      handleClosedeletemodal()
      setTimeout(() => {
        window.location.reload();
          navigate('/')

    }, 2000);
    }
    else{
      console.log(result.response.data)
      toast.error(`something went wrong, Try again later`)
      handleClosedeletemodal()
    }
    }
  return (
    <>
<div className='mb-2' id='settingsicon'>
  <button className='btn' onClick={handleShow}><i class="fa-solid fa-bars fa-2xl m-2 text-light"></i></button>
  
  
  
  <Offcanvas className=' bg-light' show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header className='me-5 fs-4' closeButton>
            <Offcanvas.Title>
              <h1  className='m-3 zezonehover' style={{fontSize:"40px"}}><a href="https://zezone-abhijith-ss-projects.vercel.app" target="_blank" style={{textDecoration:"none"}}>ZEZONE</a></h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=''>
         
          <div className='hovertoreddiv'>
          <div className='hovertoredsubdiv'>    <h2 className='hovertored'><Link to={'/'} >Home</Link></h2> </div>
          <div className='hovertoredsubdiv'> <h2 className='hovertored'><Link to={'/profile'} >profile</Link></h2> </div>
          <div className='hovertoredsubdiv'>    
             <button className='hovertoredbtn' onClick={handleShowmodal}  style={{ background: 'none', border: 'none', cursor: 'pointer'}}> <h2 >Logout</h2></button> </div>
          <div className='hovertoredsubdiv'>    <button className='hovertoredbtn' onClick={handleShowdeletemodal}  style={{ background: 'none', border: 'none', cursor: 'pointer'}}> <h2>Delete Account</h2></button> </div>
           
          
            
          </div>
  
  
          </Offcanvas.Body>
        </Offcanvas>
  
  
</div>




<Modal show={showmodal} onHide={handleClosemodal}  backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <hr style={{ border: '1.5px solid black', width: '100%' }} />
        <h3  className='text-center'>Do you want Logout</h3>
        <hr style={{ border: '1.5px solid black', width: '100%' }} />
        <Modal.Footer>
          <Button variant="success" onClick={handleClosemodal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
           Logout
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showdeletemodal} onHide={handleClosedeletemodal}  backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <hr style={{ border: '1.5px solid black', width: '100%' }} />
        <h4 className='text-center'>Do You Want to Delete your Account,All your data will be lost This Action is Irreversible </h4>
        <hr style={{ border: '1.5px solid black', width: '100%' }} />
        <Modal.Footer>
          <Button variant="success" onClick={handleClosedeletemodal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={(e)=>handleDelete(userId)}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={1500} theme='colored' />
    </>
  )
}

export default SettingIcon