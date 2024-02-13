import React, { useContext, useEffect, useState } from 'react'
import './style2.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { addpostAPI } from '../Services/allAPI';

function AddPost() {
// context

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setpreview("")
  }
  const handleShow = () => setShow(true);
  const [token, setToken] = useState("")

  //add post
  const [preview, setpreview] = useState("")
  const [addpostdetails, setaddpostdetails] = useState({
    postimage: "",
    caption: ""
  })
  //console.log(addpostdetails);


  useEffect(() => {
    if (addpostdetails.postimage) {
      setpreview(URL.createObjectURL(addpostdetails.postimage))
    }
  }, [addpostdetails.postimage])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
    else {
      setToken("")
    }
    
  }, [])





  //add post
  const handleaddpost = async (e) => {
    e.preventDefault()
    const { postimage, caption } = addpostdetails
    if (!postimage || !caption) {
      toast.info('Something is missing!')    }
    else {
      const reqBody = new FormData()
      reqBody.append("postimage", postimage)
      reqBody.append("caption", caption)


      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addpostAPI(reqBody, reqHeader)
        //console.log(result);
        if (result.status === 200) {
          toast.success('post uploaded')
          handleClose()
          setpreview("")
          setaddpostdetails({
            postimage: "",
            caption: ""
          })
          console.log(result);
        //   setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        }
       
        else {
          //console.log(result);
          alert(result)
        }
    
      }
    }
  }


  return (
    <>





      <div className="addpost m-5" onClick={handleShow}>
        <div className='first-content'>
          <i class="fa-solid fa-plus  fa-lg "></i>
        </div>
        <div className='second-content text-center'><button className='btn fs-2' >ADD POST</button></div>
      </div>



      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ADD POST</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          <div className=''>

            <div className='addpost-modal text-center bg-dark' >
              <label>
                <input type="file" style={{ display: 'none'}} onChange={(e) => setaddpostdetails({ ...addpostdetails, postimage: e.target.files[0] })} />
                <img className='addpostimg img-fluid' src={preview ? preview : "https://static.thenounproject.com/png/187803-200.png"} alt="no image" /></label>
            </div>

            <input type="text" placeholder='caption' className='caption-box text-light mt-3' onChange={(e) => setaddpostdetails({ ...addpostdetails, caption: e.target.value })} />

          </div>

        </Modal.Body>






        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="success" onClick={handleaddpost}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={1500} theme='colored' />
    </>
  )
}

export default AddPost