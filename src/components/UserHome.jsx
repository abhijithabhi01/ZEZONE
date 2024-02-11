import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './style2.css'
import HomeNavbar from './HomeNavbar';
import { dislikepostAPI, getallpostsAPI, getallusersAPI, likepostAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

function UserHome() {
  const [open, setOpen] = useState(false);
  const[alluserposts,setalluserposts] = useState([])
  const[allusers,setallusers] = useState([])

  const [showComments, setShowComments] = useState(false);

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
  let currentIndex = userpostresult.length, randomIndex;


  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};




  return (
    <>
    <HomeNavbar/>
    
<div className='div-userhome bg-primary'>
    
<div style={{padding:'50px',margin:'10px'}}>
  
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
    <button className='like ms-2 fs-2'
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <i class="fa-solid fa-thumbs-up"></i>
             </button>
             <button className='dislike ms-2 fs-2'
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <i class="fa-solid fa-thumbs-down"></i>
             </button>
      <button className='btn comment-btn' onClick={toggleComments}><i className="fa-regular fa-comment fa-2xl text-primary"></i></button>
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
     <div className='d-flex justify-content-center align-items-center'  style={{height:'70vh'}}>
        <Spinner animation="border" role="status" variant='light'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
     </div>
      }
  
</div>
    
</div>
    </>
  )
}

export default UserHome