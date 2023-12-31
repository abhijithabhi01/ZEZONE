import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SettingIcon() {
    //settings bar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
<button className='btn' onClick={handleShow}><i class="fa-solid fa-bars fa-2xl m-2 text-light"></i></button>



<Offcanvas className=' bg-dark' show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header className='me-5 fs-4' closeButton>
          <Offcanvas.Title><h1>Username</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-5 m-4'>
          <h2 className='m-4'>add post</h2>
          <h2 className='m-4'><Link to={'/profile'} style={{textDecoration:'none'}}>profile</Link></h2>
          <h2 className='m-4'>settings</h2>


<h2 className='m-4' href='#about'>About</h2>
<h2 className='m-4'>Features</h2>
<h2 className='m-4'>Contact</h2>
        </Offcanvas.Body>
      </Offcanvas>


``


    </>
  )
}

export default SettingIcon