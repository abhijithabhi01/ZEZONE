import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
    <div>
        <Row className='border border-primary m-5 p-5 text-center'>
            <Col md={6}>
            <img src='' alt='ERROR404'/>
            </Col>

            <Col md={6}  className='d-flex justify-content-between'>
           <div>
                <h2>Username</h2>
                <h4>Bio</h4>
           </div>
            </Col>   
        </Row>
        <div className="d-flex justify-content-center align-items-center p-2">
          <div className="ms-4">
          <Card style={{ width: '22rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
           <div className="ms-4">
          <Card style={{ width: '22rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="ms-4">
          <Card style={{ width: '22rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
          <div className="ms-4">
          <Card style={{ width: '22rem' }}>
     <img src="https://media.istockphoto.com/id/1433540156/photo/ai-network-plexus-technology-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=ds2EmekdZK-wcAKhLIsVE1g58SEiFEjVd4K2SKjftaI="/>
    </Card>
          </div>
        </div>
    </div>
  )
}

export default Dashboard