import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './style2.css'
import AddPost from './AddPost';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addcommentAPI, deleteacommentAPI, deleteusrcommentAPI, editProfileAPI, getallusersAPI, getuserprofileAPI } from '../Services/allAPI';
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

const [showComments, setShowComments] = useState(false);
   
const [showCommentsForPost, setShowCommentsForPost] = useState({});

const handleprofileShow = () => setShow(true);

const [usertodisplay,setusertodisplay] = useState([])
const [userposts,setuserPosts] = useState([])
const [isupdate,setisUpdate] =useState(false)
const [curruser,setcurruser] = useState([])

const[usrprofile,setUsrprofile] = useState({
  userId:"",
  username:"",
  bio:"",
  profileimage:"",
  followers:[]
})
const [existingImage,setexistingImage] = useState("")
const [selectedUser, setSelectedUser] = useState([]);
const [selectedUserfollowers, setSelectedUserfollowers] = useState();

const [preview, setpreview] = useState("")
const [takecomment,setComment] = useState({
  comment:""
})
  // State to manage selected post image and modal visibility
  const [selectedPostid, setSelectedPostid] = useState('');
  const [selectedPostImage, setSelectedPostImage] = useState('');
  const [selectedPostcaption, setSelectedPostcaption] = useState('');
  const [selectedPostlikes, setSelectedPostlikes] = useState([]);
  const [selectedPostcomments, setSelectedPostcomments] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  // Function to handle post image click and show modal
  const handlePostImageClick = (item) => {
    setSelectedPostid(item._id);
    setSelectedPostImage(item.postimage);
    setSelectedPostcaption(item.caption);
    setSelectedPostlikes(item.likes);
    setSelectedPostcomments(item.comments);
    setModalShow(true);
  };

  // Modal close handler
  const handleModalClose = () => {
    setModalShow(false);
    setSelectedPostImage(''); 
  
  };

  const toggleComments = (postId) => {
    setShowComments(!showComments);
    setShowCommentsForPost((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };


useEffect(()=>{
  const user = JSON.parse(sessionStorage.getItem('existingUser'))
  //console.log(`existing user`,user);
   setUsrprofile({...usrprofile,userId:user._id,username:user.username,bio:user.bio,profileimage:"",followers:user.followers})
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
 const finduser = await getallusersAPI(reqHeader)
 if(finduser.status===200){
  setusertodisplay(finduser.data)
  //console.log(finduser.data);
   }
  }
}
//console.log(usertodisplay);


 

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
const handleComment = async (postId) => {
  const { comment } = takecomment;
if(!comment){
  toast.info(`Something is missing`)
}
  else{
    try {
    const token = sessionStorage.getItem('token');
    const reqHeader = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const reqBody = { comment }; 

    const result = await addcommentAPI(postId, reqBody, reqHeader);

    if (result.status === 200) {
      toast.success('Comment added successfully');
      //console.log(result);
      setComment({
        comment:""
       })
    } else {
      toast.error('Failed to add comment');
      console.log(result);
    }
  } catch (error) {
    console.error(error);
    toast.error('Failed to add comment. Please try again.');
  }}
};
const handledeletecomment =async(postId, commentId)=>{
 
  //console.log(commentId,postId);
  const token = sessionStorage.getItem("token")
        const reqHeader ={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
      } 
      const reqBody = new FormData()
      reqBody.append("postId",postId)
      reqBody.append("commentId",commentId)
      const result = await deleteusrcommentAPI(reqBody,reqHeader)
      if(result.status===200){
        toast.error('comment deleted')
      }
      else if(result.status===404){
        toast.error('something went wrong')
      }
      else{
      toast.error(result.response.data)
      }
}


//console.log(usrprofile);
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












          <div className='col-lg-6 col-md-6 col-sm-12 division-profiledetails' >
         <div className='usrbiodiv'>
           
              <h2>{usrprofile.username}</h2>
                  <h4>{usrprofile.bio}</h4>
         </div>
                <div className='d-flex pffdiv'>
              <div className='pffpostdiv'> <h5 className='text-light text-center'>{userposts.length}</h5>
                <h5 className='text-light '>posts</h5></div>
               <div className='m-3'> 
               <h5 className='text-light text-center'>{usrprofile.followers.length}</h5>
                <h5 className='text-light'>Followers</h5></div>
               
              </div>
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



{/* modal */}
        <Modal show={modalShow} onHide={handleModalClose} centered key={selectedPostid} >
        <Modal.Header className='d-flex justify-content-end'>

          {!showCommentsForPost[selectedPostid] &&
            <div >

              <button onClick={handleModalClose} className="btn fs-2 btn-danger " style={{ background: 'none' }}>
                <i className="fa-solid fa-x text-danger"></i>
              </button>
            </div>
          }
        </Modal.Header>
        <Modal.Body className='bg-primary'>
          <div className={`pdivfirst-content p-2 ${showCommentsForPost[selectedPostid] ? 'hidden' : ''}`} style={{ opacity: showCommentsForPost[selectedPostid] ? '0' : '1' }}>

            <div className='addpost-modal text-center bg-dark' >

              <img
                className='addpostimg img-fluid'
                src={selectedPostImage ? `${BASE_URL}/UserPosts/${selectedPostImage}` : ''}
                alt='Selected Post'
              />
            </div>
          </div>

          {showCommentsForPost[selectedPostid] && (

<div className='dashcomment-boxxx bg-primary'>
  <div className='d-flex justify-content-between m-2' >
    <h1 className='text-light'>Comments</h1>
    <button onClick={() => toggleComments(selectedPostid)} className="btn fs-2 btn-danger btn-rounded me-3 " style={{ background: 'none' }}>
      <i className="fa-solid fa-x text-danger"></i>
    </button>

  </div>
  <div className='dashcomment-content ms-2'>
    <div className='commentlistboxxx'>
    {selectedPostcomments && selectedPostcomments.length > 0 ? (
selectedPostcomments.map((comment) => (
        <div key={comment._id}>
          <h5 className='text-light'>{comment.username}</h5>
          <div className='d-flex justify-content-between'>
            <p className='comment-paragraph'>{comment.comment}</p>
            <button onClick={(e)=>handledeletecomment(selectedPostid,comment._id)} type='button' className="btn fs-2 btn-danger btn-rounded me-5" style={{background:'none'}}>
<i className="fa-solid fa-trash fa-sm text-danger"></i>
</button>
          </div>
        </div>

      ))) : <h2 className='text-light mt-5'>No Comments uploaded yet</h2>
      }

    </div>
    <div className="messageBox mb-2 ">

<input placeholder="reply here" type="text" id="messageInput" onChange={(e) => setComment({ ...takecomment, comment: e.target.value })} />
<button id="sendButton" onClick={(e)=>handleComment(selectedPostid)}>
<i class="fa-solid text-light fa-paper-plane fa-xl "></i>  </button>
</div>
  </div>
</div>
)}
        </Modal.Body>
 
        {!showCommentsForPost[selectedPostid] &&  <div className='m-3'>
         <div>
         <button
              type="button"
              className={`like ms-2 fs-2 `}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
              <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i> </button>

              <button onClick={() => toggleComments(selectedPostid)} className='btn comment-btn' style={{ marginTop: '-2.3%' }}>
  <i className="fa-regular fa-comment fa-2xl text-primary"></i>
</button>
         </div>
         <h4 className='ms-4 text-left' style={{ overflow: 'hidden',color:'black' }}>{selectedPostlikes ?selectedPostlikes.length : 0}<span>likes</span></h4>
          
            <h4  className="text-left">{selectedPostcaption}</h4>
           
          
       </div>}
       
    
      </Modal>
    </div>
    
  )
}

export default Dashboard




