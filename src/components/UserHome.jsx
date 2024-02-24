  import React, { useEffect, useState } from 'react';
  import Card from 'react-bootstrap/Card';
  import './style2.css'
  import HomeNavbar from './HomeNavbar';
  import { addcommentAPI, deleteacommentAPI, dislikepostAPI, getallpostsAPI, getallusersAPI, likepostAPI } from '../Services/allAPI';
  import { BASE_URL } from '../Services/baseurl';
  import Spinner from 'react-bootstrap/Spinner';
  import { Link } from 'react-router-dom';
  import { toast } from 'react-toastify';

  function UserHome() {
    const [open, setOpen] = useState(false);
    const[alluserposts,setalluserposts] = useState([])
    const[allusers,setallusers] = useState([])
    const [showComments, setShowComments] = useState(false);
   
    const [showCommentsForPost, setShowCommentsForPost] = useState({});
    const [takecomment,setComment] = useState({
      comment:""
    })
    //console.log(takecomment);
    const [usrpost,setUsrpost] = useState({
      fixedvalue:1
    })

  
    const getallposts = async()=>{
      if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result = await getallpostsAPI(reqHeader)
        if(result.status===200){
         // console.log(result.data);
          setalluserposts(result.data)
          
        }
      }
    }
  //console.log(alluserposts);

    const getallusers = async()=>{
      if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result = await getallusersAPI(reqHeader)
      if(result.status===200){
        setallusers(result.data)
        //console.log(result.data);
        
      }
      }
    }


    //Dont remove this
  const userpostresult =[];

  alluserposts.forEach(obj1 => {
    const usergotmatch = allusers.find(obj2 => obj1.userId === obj2._id)

    if(usergotmatch){
      userpostresult.push({
        userId: usergotmatch._id,
        username: usergotmatch.username,
        postimage: obj1.postimage,
        caption: obj1.caption,
        Id: obj1._id,
        likes: obj1.likes || [],
        comments: obj1.comments || []
      });
    }
  })

//console.log(userpostresult);
  //like || dislike
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
  const toggleComments = (postId) => {
    setShowComments(!showComments);
    setShowCommentsForPost((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };
  
// add a comment
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

useEffect(()=>{
  getallposts()
  getallusers()
},[])
useEffect(()=>{
  getallposts()
},[handleLike])


    return (
      <>
      
      <div className='bg-primary' style={{height:'100vh'}}>
      <HomeNavbar/>
        <div className='div-userhome bg-primary'>
        {userpostresult?.length > 0 ? (
    userpostresult.map((item) => (
      <Card key={item._id} className="div-userpost" style={{background:showCommentsForPost[item.Id]?'black':'white'}}>
          <div className={`pdivfirst-content p-2 ${showCommentsForPost[item.Id] ? 'hidden' :''}`} style={{opacity:showCommentsForPost[item.Id]?'0':'1'}}>
  
          <Link to={`/userprofile/${item.username}`} className='text-info fs-1 text-center font-weight-bold' style={{ textDecoration: 'none' }}> <h2 className='text-primary'>{item.username}</h2>
      </Link>
  
  
    <hr style={{ border: '1.5px solid black', width: '100%' }} />
      <div className='userpostimg11'>
    <div className='userpostimg mx-auto border border-primary rounded '>
    <img src={userpostresult ? `${BASE_URL}/UserPosts/${item.postimage}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1ank-wR_C1doFKGVu5XKmO5bg6RTaVub5A&usqp=CA"} alt='ERROR404' />
    </div>
    </div>
    <hr style={{ border: '1.5px solid black', width: '100%' }} />
  
          <div className="d-flex justify-content-start flex-start">
          
              <button
                type="button"
                className={`like ms-2 fs-2 `}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={(e)=>handleLike(item.Id)}
                >
                <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i> </button>
                <button
                className='btn comment-btn'
                 onClick={() => toggleComments(item.Id)}
                 style={{ marginTop: '-0.3%' }}
  >
    <i className="fa-regular fa-comment fa-2xl text-primary"></i>
  </button>
  
          </div>
          <h4 className='ms-4' style={{ overflow: 'hidden',color:'black' }}>{item.likes ? item.likes.length : 0}<span>likes</span></h4>
  
          <h3 className='ms-4'  style={{ overflow: 'hidden',color:'black' }}>{item.caption}</h3>
        
    </div>
    {showCommentsForPost[item.Id] &&(
    <div className='comment-box '>
    <div className='d-flex justify-content-between m-3'>  
    <h1 className='text-light'>Comments</h1>
    <button   onClick={() => toggleComments(item.Id)} className="btn fs-2 btn-danger btn-rounded me-3 " style={{background:'none'}}>
    <i className="fa-solid fa-x fa-beat-fade  text-danger"></i>
    </button>
    </div>
    <div className='comment-content ms-2'>
    <div className='commentlistbox'> 
    {item.comments && item.comments.length > 0 ? (
    item.comments.map((comment) => (
      <div key={comment._id}>
        <h5 className='text-light'>{comment.username}</h5>
       <div className='d-flex justify-content-between'> 
        <p className='comment-paragraph'>{comment.comment}</p>
        <button onClick={(e)=>handledeletecomment(item.Id,comment._id)} type='button' className="btn fs-2 btn-danger btn-rounded me-5" style={{background:'none'}}>
    <i className="fa-solid fa-trash fa-sm text-danger"></i>
    </button>
       </div>
        </div>
     
  ))) : <h2 className='text-light mt-5'>No Comments uploaded yet</h2>
  }
  
  
    </div>
    <div class="messageBox">
   
    <input placeholder="reply here" type="text" id="messageInput" onChange={(e) => setComment({ ...takecomment, comment: e.target.value })} />
    <button id="sendButton" onClick={(e)=>handleComment(item.Id)}>
    <i class="fa-solid text-light fa-paper-plane fa-xl "></i>  </button>
  </div>
  </div>
  </div>
    )}
  
        </Card>
      ))
    ) : (
      
  <div class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
  </div>
    )}
  
  
  
          </div>
      </div>
      </>
    )
  }

  export default UserHome