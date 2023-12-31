import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style2.css'
function Dashboard() {
  return (
    <div>
        <div className='border border-primary m-5 p-5 text-center'>
            <div>
            <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww' alt='ERROR404' className='profile-img'/>
            </div>

            <div className='d-flex justify-content-between'>
                <h2>Username</h2>
                <h4>Bio</h4>
            </div>   

            
        </div>
        <div className="post-row p-2">
          <div className="post-col ms-4">
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4">
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4">
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="post-col ms-4">
          <Card style={{ width: '20rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
        </div>
        
    </div>
  )
}

export default Dashboard