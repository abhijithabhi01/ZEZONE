import React from 'react'
import Card from 'react-bootstrap/Card';
import './style2.css'
import HomeNavbar from './HomeNavbar';

function UserHome() {
    
  return (
    <>
    <HomeNavbar/>
<div className='div-userhome'>
    
<div className='div-userhomesub'>
         <Card className='div-userpost mt-5'>
              <Card.Title ClassName='m-5'><h2>USERNAME</h2></Card.Title>
            <div className='userpostimg mx-auto border border-primary rounded' >  <Card.Img variant="top"  src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt='ERROR404'/></div>
              <Card.Body>
              <div className="d-flex m-2 mb-3">
                <i class="fa-regular fa-heart fa-2xl m-1"></i>
              <i class="fa-regular fa-comment fa-2xl m-1 ms-4 mb-2"></i>
              </div>
                <Card.Text style={{overflow:'auto'}}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                
                </Card.Text>
              
              </Card.Body>
            </Card>

            <Card className='div-userpost mt-5'>
              <Card.Title ClassName='m-5'><h2>USERNAME</h2></Card.Title>
            <div className='userpostimg mx-auto border border-primary rounded' >  <Card.Img variant="top"  src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt='ERROR404'/></div>
              <Card.Body>
              <div className="d-flex m-2 mb-3">
                <i class="fa-regular fa-heart fa-2xl m-1"></i>
              <i class="fa-regular fa-comment fa-2xl m-1 ms-4 mb-2"></i>
              </div>
                <Card.Text style={{overflow:'auto'}}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                
                </Card.Text>
              
              </Card.Body>
            </Card>

            <Card className='div-userpost mt-5'>
              <Card.Title ClassName='m-5'><h2>USERNAME</h2></Card.Title>
            <div className='userpostimg mx-auto border border-primary rounded' >  <Card.Img variant="top"  src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt='ERROR404'/></div>
              <Card.Body>
              <div className="d-flex m-2 mb-3">
                <i class="fa-regular fa-heart fa-2xl m-1"></i>
              <i class="fa-regular fa-comment fa-2xl m-1 ms-4 mb-2"></i>
              </div>
                <Card.Text style={{overflow:'auto'}}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                
                </Card.Text>
              
              </Card.Body>
            </Card>

            <Card className='div-userpost mt-5'>
              <Card.Title ClassName='m-5'><h2>USERNAME</h2></Card.Title>
            <div className='userpostimg mx-auto border border-primary rounded' >  <Card.Img variant="top"  src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" alt='ERROR404'/></div>
              <Card.Body>
              <div className="d-flex m-2 mb-3">
                <i class="fa-regular fa-heart fa-2xl m-1"></i>
              <i class="fa-regular fa-comment fa-2xl m-1 ms-4 mb-2"></i>
              </div>
                <Card.Text style={{overflow:'auto'}}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                
                </Card.Text>
              
              </Card.Body>
            </Card>
    </div>
    
    
</div>
    </>
  )
}

export default UserHome