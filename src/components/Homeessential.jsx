import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Footer from '../components/Footer'


import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function Homeessential() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
         <div>
    <Row className="section m-5" id='home'>
        <Col md={12} className="heading1 ">
            <h1 className="ms-3" style={{fontSize:"10vw",fontFamily:"'Josefin Sans'"}}>ZEZONE</h1>
            <p className='typewriter ms-3'>Connecting People</p>
        </Col>
    </Row>
</div>
<div>
  
  <div id='about' className='division-second p-2'>
  <div className='d-flex justify-content-between position-static'>
    <h1 style={{color:"orange"}}>Connecting People</h1>
    <button className='startButton btn text-right btn-dark'>
                      <Link className='text-decoration-none' to={'/login'}>Start Now</Link>
                  </button>
  </div>
      <div className='p-5 scrollparagraph'> 
        <p className="text-justify" style={{fontSize:'30px',color:"white"}}>
            
            Welcome to ZEZONE, the ultimate social media platform designed to connect you with the world in an innovative and engaging way! With ZEZONE, you'll experience a seamless interface that caters to your diverse interests, allowing you to share moments, thoughts, and experiences effortlessly.
          <button className='btn btn-warning rounded' onClick={() => setOpen(!open)}>Read More</button>
          <Collapse in={open}>
        <div id="example-collapse-text1">
          Whether you're a passionate storyteller, an avid explorer, or a trendsetter, ZEZONE provides a dynamic space for you to express yourself creatively and authentically. Build meaningful connections through our intuitive interface. Join the ZEZONE community today and embark on a journey of exploration, inspiration, and connection like never before! new social media platform that aims to bring people together in positive and meaningful ways. The core philosophy of ZEZONE is "Create Your Zone" - a place where users can express themselves, share ideas, and make meaningful connections.
        </div>
      </Collapse>
          
           
                </p>
               
      </div>
      </div>
  
    <div id='features' className='division-third-main ' style={{height:'100vh'}}> 
    <div><h1 className='m-5 text-center text-light'style={{fontSize:'50px'}}>WE PROVIDE</h1></div>
    <div className='division-third'>
     
      <div class="division-third-card">
           <img src="https://media.istockphoto.com/id/1014903134/vector/flat-style-vector-illustration-discuss-social-network-news-chat-dialogue-speech-bubbles.jpg?s=612x612&w=0&k=20&c=14cpsgrmH1ruo2_tVJPlRIBBB7VNnpNYz8tuTl3ZHkg="/>
            <div class="card__content">
              <p class="card__title">Connect With World</p>
              <p class="card__description">ZEZONE platform designed to connect you with the world in an innovative and engaging way. Engage in vibrant discussions, discover trending topics, and build meaningful connections through our intuitive interface.</p>
            </div>
            </div>
          <div class="division-third-card">
           <img src="https://media.istockphoto.com/id/183072798/vector/photo-phone.jpg?s=612x612&w=0&k=20&c=n2qGeytHN6nC-BPRi1yFmbOLE5JvKLdOjMUPW3bxfVE="/>
            <div class="card__content">
              <p class="card__title">Share Your Posts
              </p><p class="card__description">you can share moments, thoughts, and experiences effortlessly. Our cutting-edge features empower you to curate personalized content, discover new communities, and connect with like-minded individuals worldwide.</p>
            </div>
            </div>
    
            <div class="division-third-card">
           <img src="https://media.istockphoto.com/id/1188208997/vector/people-communicate-by-social-media-online-chat.jpg?s=612x612&w=0&k=20&c=Hv5Yo9rgI8nwIvagn78FKeNb5Ldpl8u1sR7S8NjG2dg="/>
            <div class="card__content">
              <p class="card__title">Customizable profiles
              </p><p class="card__description">Users can create a unique profile with photos, bios, interests, and more to showcase their personality.</p>
            </div>
            </div>
            <div class="division-third-card">
           <img src="https://media.istockphoto.com/id/1314928089/vector/usability-testing-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=r2nllU7Oqcs1jJr6uzWAGW7WhwOjzo_onKXi7P6B9Ks="/>
            <div class="card__content">
              <p class="card__title">User Friendly
              </p><p class="card__description">The goal is to create an app that delights users and feels like an extension of their real-world relationships and interests. A focus on intuitive design, simplicity, control, and thoughtful features makes social media feel more human-centric.</p>
            </div>
            </div>
    </div>
          
  <p className='text-justify p-4 fs-3 text-light'>On ZeZone, users can post photos and short videos, react to friends' posts with emojis and comments, and explore content.It provides specific interests like fashion, music, sports, gaming, and more to connect with others who share their passions. <button className='btn btn-warning rounded' onClick={() => setOpen2(!open2)}>Read More</button>
        <Collapse in={open2}>
        <div id="example-collapse2">
          Whether you're a passionate storyteller, an avid explorer, or a trendsetter, ZEZONE provides a dynamic space for you to express yourself creatively and authentically. Build meaningful connections through our intuitive interface. Join the ZEZONE community today and embark on a journey of exploration, inspiration, and connection like never before! new social media platform that aims to bring people together in positive and meaningful ways. The core philosophy of ZEZONE is "Create Your Zone" - a place where users can express themselves, share ideas, and make meaningful connections.
        </div>
      </Collapse></p> 
       
     
    </div>
</div>
<Footer/>
    </>
  )
}

export default Homeessential