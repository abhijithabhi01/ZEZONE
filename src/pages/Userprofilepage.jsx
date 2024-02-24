import React, { useEffect, useState } from 'react'
import './homestyle.css'
import './userprofilepagestyle.css'
import { Link, useParams } from 'react-router-dom'
import { addcommentAPI, deleteacommentAPI, followauserAPI, getallpostsAPI, getallusersAPI, likepostAPI } from '../Services/allAPI'
import { BASE_URL } from '../Services/baseurl'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { hover } from '@testing-library/user-event/dist/hover'

function Userprofilepage() {

  const [user, setUser] = useState({})
  const [allusers, setAllusers] = useState([])
  const [alluserposts, setalluserposts] = useState([]);
  const [posts, setPosts] = useState([]);
  const { showusername } = useParams();
  const userId = user._id
  const [showComments, setShowComments] = useState(false);
  const [showCommentsForPost, setShowCommentsForPost] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const [selectedPostid, setSelectedPostid] = useState('');
  const [selectedPostImage, setSelectedPostImage] = useState('');
  const [selectedPostcaption, setSelectedPostcaption] = useState('');
  const [selectedPostlikes, setSelectedPostlikes] = useState([]);
  const [selectedPostcomments, setSelectedPostcomments] = useState([]);
  const [Followers,setFollowers] = useState([])
  const [takecomment,setComment] = useState({
    comment:""
  })
  const toggleComments = (postId) => {
    setShowComments(!showComments);
    setShowCommentsForPost((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
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
  // console.log(showusername);
  const getallusers = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getallusersAPI(reqHeader)
      if (result.status === 200) {
        setAllusers(result.data)
      }
    }
  }
  const searchkey = 'username';
  const getuserId = 'userId'

  useEffect(() => {

    const igotuser = allusers.find(item => item[searchkey] === showusername)

    if (igotuser) {
      setUser(igotuser);
      console.log(`user found`,igotuser);
      setFollowers(user.followers)

    }
  }, [allusers, showusername, searchkey])

  const getallposts = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getallpostsAPI(reqHeader)
      if (result.status === 200) {
        //console.log(result.data);
        setalluserposts(result.data);

      }
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
  const handleLike = async (postId) => {
    try {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    const result =  await likepostAPI(postId, reqHeader);
      if(result.status==200){
        toast.success('Post liked');
      
      // console.log(result)
      }
      else if(result.status==210){
        toast.error('liked removed');
      }
    else{
    // console.log(result)
      toast.error('something went wrong');
    }
    
    } catch (error) {
      console.error('Error liking post');
      toast.error('Failed to like post. Please try again.');
    }
  };
  const handledeletecomment =async(postId, commentId)=>{
 
    //console.log(commentIdd,PostIdd);
    const token = sessionStorage.getItem("token")
          const reqHeader ={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        } 
        const reqBody = new FormData()
        reqBody.append("postId",postId)
        reqBody.append("commentId",commentId)
        const result = await deleteacommentAPI(reqBody,reqHeader)
        if(result.status===200){
          toast.error('comment deleted')
        }
        else if(result.status===404){
          toast.error('user cannot delete comment')
        }
        else{
        toast.error(result.response.data)
        }
  }
  useEffect(() => {

    const igotusrposts = alluserposts.filter(post => post[getuserId] === userId)


    if (igotusrposts) {
      setPosts(igotusrposts);
      //console.log(`userpost found`,igotusrposts);
    }
  }, [alluserposts, getuserId, userId])
  const handlefollow = async (usrid) => {
    try {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    const result =  await followauserAPI(usrid, reqHeader);
      if(result.status==200){
        toast.success('following');
     console.log(result)
      }
      else if(result.status==210){
        toast.error('unfollowed');
      }
    else{
    console.log(result)
      toast.error('something went wrong');
    }
    
    } catch (error) {
      console.error('Error following');
      toast.error('Failed to like post. Please try again.');
    }
  };
  useEffect(() => {
    getallusers()
  }, [handleLike])
useEffect(()=>{
  getallposts()
},[handleLike])
  
  return (
    <>
      <div className='bg-primary' style={{ height: '100vh' }}>
        <div> <button type='button' className='btn hovertored'> <h2 className='m-4 '><Link to={'/'} className='text-light' style={{ textDecoration: 'none' }}><i class="fa-solid fa-arrow-left"></i>Home</Link></h2></button></div>
        <div className='p-3'>
          <div className='division-one row m-2 mt-3'>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='division-profileimg m-5'>


                <img
                  src={user.profileimage ? `${BASE_URL}/UserPosts/${user.profileimage}` : 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'}
                  alt='ERROR404'
                  className='dashprofile-img img-fluid border border-light' />


              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 division-profiledetails'>

             <div className='d-flex'> 
             <h2>{user.username}</h2>
                 
            <button
              type="button"
              className='btn ms-2 text-center align-items-center justify-content-center'
              style={{ background: 'dodgerblue',cursor: 'pointer',color:'white',borderRadius:'10px',fontSize:'1rem',height:'40px',marginTop:'10px', }}  onClick={(e)=>handlefollow(user._id)}>
              follow 
              </button>
             
             </div>
              <h4 >{user.bio}</h4>

              <div className='d-flex pffdiv'>
              <div className='pffpostdiv'> <h5 className='text-light text-center'>{posts.length}</h5>
                <h5 className='text-light '>posts</h5></div>
               <div className='m-3'> 
               <h5 className='text-light text-center'>{Followers?.length || 0}</h5>
                <h5 className='text-light'>Followers</h5></div>
               
              </div>
            </div>
          </div>
        </div>


        <hr style={{ border: '1.5px solid white ', width: '100%' }} />
        <div className='bg-primary' style={{ height: '100%' }}>
          <div><h1 className='text-light ms-5'>User Posts</h1></div>
          <div className='bg-primary userpostcard' >
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Card key={index} style={{ width: '18rem', margin: '1rem' }} className='usrpostdiv'>
                  <Card.Header>

                  </Card.Header>
                  <Card.Img onClick={() => handlePostImageClick(post)} variant="top" src={posts ? `${BASE_URL}/UserPosts/${post.postimage}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1ank-wR_C1doFKGVu5XKmO5bg6RTaVub5A&usqp=CA"} height={'300px'} />
                  <Card.Footer>
                  </Card.Footer>
                </Card>
              ))
            ) : (
              <h1 className='text-light mt-5'>No posts uploaded</h1>
            )}

          </div>
        </div>



      </div>

      <Modal  show={modalShow} onHide={handleModalClose} centered key={selectedPostid} style={{height:'100%'}}>
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

<div className='dashcomment-box bg-primary'>
  <div className='d-flex justify-content-between m-2' >
    <h1 className='text-light'>Comments</h1>
    <button onClick={() => toggleComments(selectedPostid)} className="btn fs-2 btn-danger btn-rounded me-3 " style={{ background: 'none' }}>
      <i className="fa-solid fa-x text-danger"></i>
    </button>

  </div>
  <div className='dashcomment-content ms-2'>
    <div className='commentlistbox' style={{height:'30%'}}>
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

        {!showCommentsForPost[selectedPostid] && <div className='m-3'>
          <div>
          <button
              type="button"
              className={`like ms-2 fs-2 `}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={(e)=>handleLike(selectedPostid)}
              >
              <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i> </button>

            <button onClick={() => toggleComments(selectedPostid)} className='btn comment-btn' style={{ marginTop: '-2.3%' }}>
              <i className="fa-regular fa-comment fa-2xl text-primary"></i>
            </button>
          </div>
          <h4 className='ms-4 text-left' style={{ overflow: 'hidden', color: 'black' }}>{selectedPostlikes ? selectedPostlikes.length : 0}<span>likes</span></h4>

          <h4 className="text-left">{selectedPostcaption}</h4>


        </div>}

    
        
      </Modal>
      <ToastContainer position='top-right' autoClose={1500} theme='colored' />
    </>
  )
}

export default Userprofilepage