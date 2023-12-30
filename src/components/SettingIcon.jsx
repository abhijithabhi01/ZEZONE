import Button from 'react-bootstrap/Button';
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



<Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>Username</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='ps-5 m-5'>
          <h2>add post</h2>
          <h2><Link to={'/profile'} style={{textDecoration:'none'}}>profile</Link></h2>
          <h2>settings</h2>


<h2 href='#about'>About</h2>
<h2>Features</h2>
<h2>Contact</h2>
        </Offcanvas.Body>
      </Offcanvas>


``


    </>
  )
}

export default SettingIcon