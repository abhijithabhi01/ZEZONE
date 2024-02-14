import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './style2.css'
import HomeNavbar from './HomeNavbar';
import { dislikepostAPI, getallpostsAPI, getallusersAPI, likepostAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserHome() {
  const [open, setOpen] = useState(false);
  const[alluserposts,setalluserposts] = useState([])
  const[allusers,setallusers] = useState([])
  const [showComments, setShowComments] = useState(false);
  const[isliked,setIsliked] = useState(false)

  const [usrpost,setUsrpost] = useState({
    fixedvalue:1
  })

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const cardStyle = {
    backgroundColor: showComments ? 'black' : 'white',
    
  };
const pdivstyle = {
  opacity : showComments ? '0' : '1',
}
  const getallposts = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getallpostsAPI(reqHeader)
      if(result.status===200){
        //console.log(result.data);
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
      userId:usergotmatch._id,
      username:usergotmatch.username,
      postimage:obj1.postimage,
      caption:obj1.caption
    })
   }
})

//console.log(userpostresult);

useEffect(()=>{
  getallposts()
  getallusers()
},[])


const shuffleArray = (array) => {
  const newArray = [...array];  // Create a new array copy
  let currentIndex = newArray.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]
    ];
  }

  return newArray;
};

//like || dislike


const handleLikeDislike = async (id) => {
  const token = sessionStorage.getItem("token")
  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
} 
  

  
    const result = await likepostAPI(id,reqHeader);

    if (result.status === 200) {
      toast.success('Post liked');
    } else {
      console.log(result.response); 
     
      toast.error(`Something went wrong. Try again later.`);
    }
  
};

  return (
    <>
    <HomeNavbar/>
    
<div className='div-userhome bg-primary'>
    

  {shuffleArray(userpostresult)?.length > 0 ? shuffleArray(userpostresult).map((item) => (
  
  <Card className='div-userpost ' style={cardStyle}>
  <div className={`pdivfirst-content p-2 ${showComments ? 'hidden' : ''}`}style={pdivstyle}>
   
   
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
    {item.liked ? (
  <button
    type='button'
    className={`like ms-2 fs-2 `}
    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
   
  >
    <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i>
  </button>
) : (
  <button
    type='button'
    className={`like ms-2 fs-2 `}
    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
  
  >
    <i className="fa-regular fa-heart" style={{ color: '#ff0000' }}></i>
  </button>
)}


            
      <button className='btn comment-btn' onClick={toggleComments}  style={{marginTop:'-0.3%'}}><i className="fa-regular fa-comment fa-2xl text-primary"></i></button>
    </div>


    
    <h3 className='ms-4' style={{ overflow: 'hidden' }}>{item.caption}</h3>
  </div>
  {showComments && (
   <div className='comment-box'>
   <div className='d-flex justify-content-between m-3'>  
     <h1 className='text-light'>Comments</h1>
     <button onClick={toggleComments} className="btn fs-2 btn-white me-5">
       <i className="fa-solid fa-x"></i>
     </button>
   </div>
   <div className='comment-content ms-2'>
     <div>
       <p className='comment-paragraph'>delectus dolorem similique sed iure eos ea illo, officia id.</p>
       <p className='comment-paragraph'>delectus dolorem similique sed iure eos ea illo, officia id.</p>
       <p className='comment-paragraph'>delectus dolorem similique sed iure eos ea illo, officia id.</p>
     </div>
     <div className='comment-input'>
       <input type="text" placeholder='reply here' className='reply-input-box text-center text-light '/>
     </div>
   </div>
  </div>
  
  )}






  </Card>
  
      ))
      :
     <div className='d-flex justify-content-center align-items-center'  style={{height:'100vh'}}>
        <Spinner animation="border" role="status" variant='light'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
     </div>
      }
  

    
</div>
    </>
  )
}

export default UserHome