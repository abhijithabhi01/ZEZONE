import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
       <div className='parent'>
          <div className="site-footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify"> Welcome to ZEZONE, the ultimate social media platform designed to connect you with the world in an innovative and engaging way! With ZEZONE, you'll experience a seamless interface that caters to your diverse interests, allowing you to share moments, thoughts, and experiences effortlessly.</p>
            </div>
  
          
  
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
              <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contribute</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Contact us</h6>
              <ul className="footer-links">
               <li>Street: No.3, 2nd Main Road
RMV Stage II - 1st Block
City: Bengaluru
State: Karnataka
</li>
<li>Zip/Postcode: 560095</li>
<li>Country: India</li>
              
              </ul>
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by ZEZONE
              </p>
            </div>
  
          
          </div>
        </div>
  </div> 
       </div>
    </>
  )
}

export default Footer