import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './style2.css'
import AddPost from './AddPost';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Dashboard() {
// modal
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [username,setUsername] = useState("")
const [bio,setBio] = useState("")
useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setUsername(JSON.parse(sessionStorage.getItem('existinguser')).username)
    setBio(JSON.parse(sessionStorage.getItem('existinguser')).bio)
    console.log(sessionStorage.getItem('existinguser'));
  }
},[])

  return (
    <div className='bg-primary'> 
        <div className='division-one m-2 row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>

       
            <div className='division-profileimg m-5'>
              <img
                src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww'
                alt='ERROR404'
                className='profile-img img-fluid'/>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 division-profiledetails'>
       
          <h2>{username}</h2>
              <h4>{bio}</h4>
        </div>
      </div>

<AddPost/>

        <div className="post-row p-2">
         
          <div className="post-col ms-4" onClick={handleShow}>
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4" onClick={handleShow} >
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4" onClick={handleShow}>
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4" onClick={handleShow}>
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
        </div>
        

        {/* modal */}
        <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Dashboard