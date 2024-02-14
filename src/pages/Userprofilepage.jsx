import React, { useEffect, useState } from 'react'
import './homestyle.css'
import { Link, useParams } from 'react-router-dom'
import {getallpostsAPI, getallusersAPI } from '../Services/allAPI'
import { BASE_URL } from '../Services/baseurl'
import Card from 'react-bootstrap/Card';
function Userprofilepage() {

  const[user,setUser] = useState({})
  const[allusers,setAllusers] = useState([])
  const[alluserposts,setalluserposts] = useState([]);
  const [posts, setPosts] = useState([]);
  const { showusername } = useParams();
  const userId = user._id
  
// console.log(showusername);
  const getallusers = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await getallusersAPI(reqHeader)
    if(result.status===200){
     setAllusers(result.data)
    }
    }
  }
const searchkey = 'username';
const getuserId = 'userId'


useEffect(()=>{
  
const igotuser = allusers.find(item=>item[searchkey] === showusername)

if (igotuser) {
 setUser(igotuser);
 //console.log(`user found`,igotuser);
}
},[allusers,showusername,searchkey])



const getallposts = async()=>{
  if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await getallpostsAPI(reqHeader)
    if(result.status===200){
     console.log(result.data);
     setalluserposts(result.data);
      
    }
  }
}

useEffect(()=>{
  
const igotusrposts = alluserposts.filter(post=>post[getuserId] === userId)


if (igotusrposts) {
setPosts(igotusrposts);
 console.log(`userpost found`,igotusrposts);
 }
},[alluserposts,getuserId,userId])
// console.log(posts);
useEffect(()=>{
  getallposts()
  getallusers()
},[])
  return (
    <>
 <div className='bg-primary' style={{height:'100vh'}}> 
 <div> <button type='button' className='btn hovertored'> <h2 className='m-4 '><Link to={'/'} className='text-light' style={{textDecoration:'none'}}><i class="fa-solid fa-arrow-left"></i>Home</Link></h2></button></div>
     <div className='p-3'>
          <div className='division-one row m-2 mt-3'>
          
          <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='division-profileimg m-5'>
            
           
              <img
                   src={user.profileimage?`${BASE_URL}/UserPosts/${user.profileimage}`:'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'}
                    alt='ERROR404'
                    className='dashprofile-img img-fluid border border-light'/>
            
          
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 division-profiledetails' style={{overflow:'auto'}}>
       
            <h2 sty>{user.username}</h2>
                <h4 >{user.bio}</h4> 
          </div>
        </div>
     </div>


     <hr style={{ border: '1.5px solid white ', width: '100%' }} />
<div className='bg-primary' style={{height:'100%'}}>
    <div><h1 className='text-light ms-5'>User Posts</h1></div>
    <div className='bg-primary userpostcard' >
    {posts.length > 0 ? (
    posts.map((post, index) => (
      <Card key={index} style={{ width: '18rem', margin: '1rem' }} className='usrpostdiv'>
        <Card.Img variant="top" src={posts ? `${BASE_URL}/UserPosts/${post.postimage}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1ank-wR_C1doFKGVu5XKmO5bg6RTaVub5A&usqp=CA"}  height={'300px'}/>
        <Card.Body>
          <Card.Title>{post.caption}</Card.Title>
  
        </Card.Body>
      </Card>
    ))
  ) : (
    <h1 className='text-light mt-5'>No posts uploaded</h1>
  )}
    
    </div>
</div>
       
       
     
    </div>

 
    </>
  )
}

export default Userprofilepage