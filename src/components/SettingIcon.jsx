import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SettingIcon() {
    //settings bar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const[token,setToken] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(true)
    }
  })
  return (
    <>
<button className='btn' onClick={handleShow}><i class="fa-solid fa-bars fa-2xl m-2 text-light"></i></button>



<Offcanvas className=' bg-light' show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header className='me-5 fs-4' closeButton>
          <Offcanvas.Title><h1 className='m-3'>ZEZONE</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-5 m-4'>
         {token? 
        <div className='text-center'>
           <h2 className='m-4'><Link to={'/'} style={{textDecoration:'none'}}>Home</Link></h2>
            <h2 className='m-4'><Link to={'/profile'} style={{textDecoration:'none'}}>profile</Link></h2>
            <h2 className='m-4'>Logout</h2>
        </div>
          :
<div className='text-center'>
  <h2 className='m-4' href='#about'>Home</h2>
  <h2 className='m-4' href='#about'>About</h2>
  <h2 className='m-4'>Features</h2>
  <h2 className='m-4'>Contact</h2>
</div>
}
        </Offcanvas.Body>
      </Offcanvas>


``


    </>
  )
}

export default SettingIcon