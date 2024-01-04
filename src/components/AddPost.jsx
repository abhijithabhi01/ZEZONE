import React, { useState } from 'react'
import './style2.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddPost() {
// modal
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);





  return (
    <>
        




        <div className="addpost m-5" onClick={handleShow}>
  <div className='first-content'><i class="fa-solid fa-plus  fa-lg "></i></div>
  <div className='second-content text-center'><button className='btn fs-2'>ADD POST</button></div>
</div>
  


 {/* modal */}
 <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title>ADD POST</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          <div className=''>
            
            <div className='addpost-modal text-center bg-dark'><i class="fa-solid fa-plus  fa-2xl" style={{fontSize:"80px"}}></i></div>
            <input type="text" placeholder='caption'className='caption-box text-light mt-3'/>

          </div>

        </Modal.Body>






        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  )
}

export default AddPost