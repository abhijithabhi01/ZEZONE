import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deletepostAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';

function Deletepost({ userpost }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleDelete = async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader ={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
      } 
      const result = await deletepostAPI(id,reqHeader)
      if(result.status===200){
        toast.success('post deleted')
       
        handleClose()
        setTimeout(() => {
         window.location.reload();
      }, 2000);
      }
      else{
        toast.error(result.response.data)
      }
    }
  return (
    <>
 <button onClick={handleShow} className='btn text-danger fs-5'>Delete post</button>


      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete the post</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={(e)=>handleDelete(userpost._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={1500} theme='colored' />
    </>
  )
}

export default Deletepost