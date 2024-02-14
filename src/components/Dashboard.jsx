import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './style2.css'
import AddPost from './AddPost';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editProfileAPI, getuserprofileAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';
import Dropdown from 'react-bootstrap/Dropdown';
import Editpost from './Editpost';
import Deletepost from './Deletepost';
import { ToastContainer, toast } from 'react-toastify';

function Dashboard() {
// modal
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);




const handleprofileShow = () => setShow(true);


const [userposts,setuserPosts] = useState([])
const [isupdate,setisUpdate] =useState(false)


const[usrprofile,setUsrprofile] = useState({
  username:"",
  bio:"",
  profileimage:""
})
const [existingImage,setexistingImage] = useState("")

const [preview, setpreview] = useState("")


  // State to manage selected post image and modal visibility
  const [selectedPostImage, setSelectedPostImage] = useState('');
  const [selectedPostcaption, setSelectedPostcaption] = useState('');
  const [modalShow, setModalShow] = useState(false);

  // Function to handle post image click and show modal
  const handlePostImageClick = (item) => {
    setSelectedPostImage(item.postimage);
    setSelectedPostcaption(item.caption);
    setModalShow(true);
  };

  // Modal close handler
  const handleModalClose = () => {
    setModalShow(false);
    setSelectedPostImage(''); 
  };




useEffect(()=>{
  const user = JSON.parse(sessionStorage.getItem('existingUser'))
 // console.log(`existing user`,user);
   setUsrprofile({...usrprofile,username:user.username,bio:user.bio,profileimage:""})
   setexistingImage(user.profileimage)
  },[isupdate])
  useEffect(() => {
    if (usrprofile.profileimage) {
     
      setpreview(URL.createObjectURL(usrprofile.profileimage))
      
    }
    else{
      setpreview("")
    }
  }, [usrprofile.profileimage])
  // console.log(usrprofile);
//get user posts
const getuserposts = async()=>{
  if(sessionStorage.getItem('token')){
 const token = sessionStorage.getItem('token')
 const reqHeader = {
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`
 }
 
 const result = await getuserprofileAPI(reqHeader)
 if(result.status===200){
setuserPosts(result.data)
//console.log(result.data);
 }
  }
}

useEffect(()=>{
  getuserposts()
},[])
const handlepClose = () => {
  setUsrprofile({
    bio:"",
  profileimage:""
  })
  setShow(false);}
//edit profile
const handleeditprofile = async()=>{
  const{username,bio,profileimage} = usrprofile
  if(!profileimage || !bio){
    toast.info('complete the profile details')
  }
  else{
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("bio",bio)
    preview?reqBody.append("profileimage",profileimage):reqBody.append("profileimage",existingImage)

    const token = sessionStorage.getItem("token")

    if(preview){
      const reqHeader ={
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
    }
  const result = await editProfileAPI(reqBody,reqHeader)
 // console.log(result);

  if(result.status==200){
    toast.success('Profile Updated')
    console.log(result);
    setisUpdate(true)
    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    handlepClose()
  }
  else{
    console.log(`edit profile error`,result.response.data);
  }
  }
  else{
     const reqHeader ={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        } 
  const result = await editProfileAPI(reqBody,reqHeader)
  console.log(result);
  if(result.status==200){
    toast.success('Profile Updated')
    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    handlepClose()
  }
  else{
    console.log(`edit profile error`,result.response.data);
  }
  }
  }
  //console.log(usrprofile);
 const handleprofileClose = () => {
  setShow(false);
  setpreview("")
  setUsrprofile({
    username:"",
  bio:"",
  profileimage:""
  })
}
}

  return (
    <div className='bg-primary'> 
     <div className='p-3'>
          <div className='division-one row'>
            <div className='d-flex justify-content-end mt-2' style={{marginLeft:'-10px'}}>
              <button onClick={handleprofileShow}  style={{ background: 'none', border: 'none', cursor: 'pointer',color:'lightgreen' }}><i class="fa-solid fa-pencil"></i></button></div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='division-profileimg m-5'>
            
           
              <img
                   src={existingImage?`${BASE_URL}/userposts/${existingImage}`:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'}
                    alt='ERROR404'
                    className='dashprofile-img img-fluid'/>
            
          
            </div>
          </div>
  





          <Modal show={show} onHide={handlepClose} centered  backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          
        <div className='division-profileimg m-5'>
             <label>
                <input type="file" style={{ display: 'none'}} onChange={(e) => setUsrprofile({ ...usrprofile, profileimage: e.target.files[0] })} />
                 {existingImage==""? <img 
                  src={preview?preview:'https://www.shutterstock.com/image-vector/add-user-icon-600nw-693765823.jpg'}
                  alt='ERROR404'
                  className='profile-img img-fluid'/>
                :
                <img 
                  src={preview?preview:`${BASE_URL}/userposts/${existingImage}`}
                  alt='ERROR404'
                  className='profile-img img-fluid'/>
                }
             </label>
            </div>

           <div >
           <input type="text" placeholder='bio' className='caption-box text-light mt-3' value={usrprofile.bio} onChange={(e) => setUsrprofile({ ...usrprofile, bio: e.target.value })} />
           </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handlepClose}>
            cancel
          </Button>
          <Button variant="success" onClick={handleeditprofile}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>












          <div className='col-lg-6 col-md-6 col-sm-12 division-profiledetails'>
         
            <h2>{usrprofile.username}</h2>
                <h4>{usrprofile.bio}</h4>
          </div>
        </div>
     </div>
     <hr style={{ border: '1.5px solid white', width: '100%' }} />
<AddPost/>

        <div className="post-row p-2">
         
        {userposts?.length>0? userposts.map((item)=>(
          
          <div className="post-col ms-4">
 <Card className='p-1 border rounded' style={{ width: '20rem' }}>

<div className='dropdown bg-dark text-end'>
   <Dropdown style={{justifyContent:'flex-end'}}>
        <Dropdown.Toggle variant="dark" className='fs-3' style={{visibility:'hidden'}} id="dropdown-autoclose-true"> 
       <span style={{visibility:'visible'}}> <i class="fa-solid fa-ellipsis-vertical"></i></span>
        </Dropdown.Toggle>
        <Dropdown.Menu  className="dropdown-menu-end bg-dark ">
        <Dropdown.Item className=' text-info '><Editpost userpost={item}/></Dropdown.Item>
        <Dropdown.Item className=' text-danger'><Deletepost  userpost={item}/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
</div>
  <div>   <img   onClick={() => handlePostImageClick(item)} src={userposts?`${BASE_URL}/UserPosts/${item.postimage}` :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1ank-wR_C1doFKGVu5XKmO5bg6RTaVub5A&usqp=CAU"} height={'350px'} width={'100%'}/>
 

  </div>
    </Card>
          </div>
        ))  
        :
        <h3 className='text-center text-light mb-5'>no post uploaded yet</h3>

        }
         
        </div>
        <ToastContainer position='top-right' autoClose={1500} theme='colored' />


        <Modal show={modalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          <div className=''>

            <div className='addpost-modal text-center bg-dark' >
            
            <img
className='addpostimg img-fluid'
src={selectedPostImage ? `${BASE_URL}/UserPosts/${selectedPostImage}` : ''}
alt='Selected Post'
/>
            </div>
          </div>
        </Modal.Body>
       <div className='m-3'>
         
            <h4  className="text-left">{selectedPostcaption}</h4>
          
       </div>
      </Modal>
    </div>
    
  )
}

export default Dashboard




