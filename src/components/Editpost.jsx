import React, { useEffect, useState } from 'react'
import './style2.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { editpostAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';

function Editpost({userpost}) {
 
// context

  const [preview,setPreview] = useState("")

const [usrposts,setUsrposts] = useState({
  postimage:"",
 caption:userpost.caption,
  id:userpost._id
})
//console.log(usrposts);

const [show, setShow] = useState(false);


useEffect(() => {
  if (usrposts.postimage) {
    setPreview(URL.createObjectURL(usrposts.postimage));
  }
  //console.log('Preview:', preview);
}, [usrposts.postimage, preview]);


//console.log(userpost);
const handleClosee = ()=>{
setUsrposts({
  postimage:"",
  caption:userpost.caption,
  id:userpost._id
})
setPreview("")
handleClose()
}
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleupdate = async () => {
    
    const {postimage, caption, id} = usrposts

    if (postimage || !caption) {
      toast.info('Something is missing')
    }
    else {
      const reqBody = new FormData();
preview ? reqBody.append("postimage", usrposts.postimage) : reqBody.append("postimage", userpost.postimage);
reqBody.append("caption", caption);

    
      const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editpostAPI(id, reqBody, reqHeader)
       // console.log(result);
        if (result.status === 200) {
          toast.success('post Updated')
          handleClose()
          setTimeout(() => {
            window.location.reload();
        }, 2000);
        }
        else {
         // console.log(result);
          toast.error('Something went wrong,try again later')
        }
      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await editpostAPI(id, reqBody, reqHeader)
       // console.log(result);
        if (result.status === 200) {
          toast.success('post Updated')
          handleClose()
          setTimeout(() => {
            window.location.reload();
        }, 2000);
        }
        else {
         // console.log(result);
         toast.error('Something went wrong,try again later')
        }
      }
    }
  }

  return (
    <>
 <button onClick={handleShow} className='btn text-info fs-5'>Edit post</button>




  {/* modal */}
  <Modal show={show} onHide={handleClose} centered  backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit POST</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          <div className=''>

            <div className='addpost-modal text-center bg-dark' >
   
            <label>
            <input type="file" style={{ display: 'none' }} onChange={(e) => setUsrposts({ ...usrposts, postimage: e.target.files[0] })} />

              <img className='addpostimg img-fluid' src={preview ? preview : `${BASE_URL}/userposts/${userpost.postimage}`} alt="no image" />
              </label>
            </div>

            <input type="text" 
            placeholder='caption' 
            className='caption-box text-light mt-3' 
            value={usrposts.caption}
            onChange={(e)=>setUsrposts({...usrposts,caption:e.target.value})}/>

          </div>

        </Modal.Body>






        <Modal.Footer>
          <Button variant="danger" onClick={handleClosee}>
            cancel
          </Button>
          <Button variant="success" onClick={handleupdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={1500} theme='colored' />
    </>
  )
}

export default Editpost