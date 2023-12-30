import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Footer from '../components/Footer'
import seconddivisionimage from '../Assests/nigel-tadyanehondo-o7BHcP8eRB8-unsplash.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
import Carousal from './Carousal';

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
  
  <div id='about' className='division-second p-2 '>
  <div className='d-flex justify-content-between position-static'>
    <h1 style={{color:"orange"}}>Connecting People</h1>
    <button className='startButton btn text-right btn-dark rounded'><Link className='text-decoration-none' to={'/login'}>Start Now</Link></button>
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
  
    <div id='features' className='division-third-main' style={{height:'100vh'}}> 
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
          
  <p className='text-justify p-2 fs-4 text-light' >On ZeZone, users can post photos and short videos, react to friends' posts with emojis and comments, and explore content.It provides specific interests like fashion, music, sports, gaming, and more to connect with others who share their passions. <button className='btn btn-warning rounded' onClick={() => setOpen2(!open2)}>Read More</button>
        <Collapse in={open2}>
        <div id="example-collapse2">
          Whether you're a passionate storyteller, an avid explorer, or a trendsetter, ZEZONE provides a dynamic space for you to express yourself creatively and authentically. Build meaningful connections through our intuitive interface. Join the ZEZONE community today and embark on a journey of exploration, inspiration, and connection like never before! new social media platform that aims to bring people together in positive and meaningful ways. The core philosophy of ZEZONE is "Create Your Zone" - a place where users can express themselves, share ideas, and make meaningful connections.
        </div>
      </Collapse></p> 
       
     
    </div>
</div>


<div className='h-100 m-3 mt-5'>
  <div><h1 className='text-center mt-1 text-light'>Thoughts About ZEZONE</h1></div>

    <div className='reviewcard-srolldiv d-flex p-1 ms-auto' style={{}}>

      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1523464862212-d6631d073194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
    <h1 class="review-head">jessica</h1>
  </div>
  <div class="second-content">
    <p>I've been using ZEZONE for a few months now and I love it! It's so easy to connect with friends. I'd definitely recommend this app to anyone looking for a new social media platform. 5 stars!</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.webp?b=1&s=170667a&w=0&k=20&c=Qm92okavAxSUfDCrPWc5GyFFgwRSHk90x9yP5E4JMdc=" alt="" />
    <h1 class="review-head">iamJake84</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my go-to app for connecting with friends and discovering new content. The interface is clean, and I love the diverse range of features. It's intuitive and easy to use</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1035342046/photo/fair-surajkund-faridabad-haryana-india-stock-image.jpg?s=612x612&w=0&k=20&c=ZDSJJ7_E6Q89qXw6bKmemea8DvNQTuw36LaLB15qECI=" alt="" />
    <h1 class="review-head">MAD_FOoDIE</h1>
  </div>
  <div class="second-content">
    <p>As a food blogger, ZEZONE is a blessing! Sharing my food experiences is fun, and the foodie community here is vibrant. The app's design makes browsing through food content a delightful experience</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1256127007/photo/close-up-portrait-of-his-he-nice-attractive-glad-cheerful-cheery-guy-pointing-forefinger.webp?b=1&s=170667a&w=0&k=20&c=3wxx_FOljVpB6BTWS6F78g6dBU42jrzuInOJrtEBQ0U=" alt="" />
    <h1 class="review-head">Dribble_headed</h1>
  </div>
  <div class="second-content">
    <p>I find myself spending hours just scrolling through posts and looking at pictures. It's a great way to stay up to date on what my friends are doing</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/956864266/photo/happy-woman-backpacker-traveler-take-a-selfie-photo-on-amazing-ocean-coast.jpg?s=612x612&w=0&k=20&c=7KxehBKoyxSFMdFSxHakGQZsbYhyyYl705_Dq-MHvA4=" alt="" />
    <h1 class="review-head">Albatross</h1>
  </div>
  <div class="second-content">
    <p>I was initially excited to try out the new ZEZONE app, but after using it for a few weeks, I'm pretty disappointed. The interface is confusing and cluttered, and the app is super buggy</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/187052514/photo/trendy-techie-and-your-product.jpg?s=612x612&w=0&k=20&c=N2FTvKsOuHYQacipaKt7Y54UTHibFEumk5KeQ8Gwi8k=" alt="" />
    <h1 class="review-head">guy_with_tech</h1>
  </div>
  <div class="second-content">
    <p>The app's user experience is fantastic. It's quick, responsive, and I appreciate the regular updates. ZEZONE keeps innovating and introducing new features, making it engaging for tech enthusiasts like me</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.jpg?s=612x612&w=0&k=20&c=ay4JQ4nu09orMCyWSY4AiZ0VZKYs29_zDXvqREG9lgg=" alt="" />
    <h1 class="review-head">Elvis_astral</h1>
  </div>
  <div class="second-content">
    <p>Been using ZEZONE for a while now, and I'm impressed! The privacy controls are top-notch, giving me full control over who sees my content. Plus, the seamless messaging system keeps me connected effortlessly</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1156760847/photo/dream-flowers-princess.jpg?s=612x612&w=0&k=20&c=-QL7tdtQjmkmlPJaPJYzSSXsMCCw3wXz2bvZlDMVrA0=" alt="" />
    <h1 class="review-head">ArtisticSoul22</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is more than a social app; it's my book club! The groups and discussions here about literature are fantastic. I've discovered so many new books and made friends who share my passion for reading</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" alt="" />
    <h1 class="review-head">ArtisticSoul22</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is perfect for artists! I've found a fantastic community here to share my work with. The support and feedback from fellow creatives are invaluable. Love the creative vibe</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1403510900/photo/businessman-using-laptop-at-coffee-shop.jpg?s=612x612&w=0&k=20&c=22RdkHYsx32O6PrF1bdZFmIYFenpeQNrgv2cIWLPoKM=" alt="" />
    <h1 class="review-head">ROY</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is helping me network and grow my business. It's an excellent platform to connect with like-minded professionals, share insights, and collaborate. Great for expanding my entrepreneurial circle</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1292575759/photo/loving-parent-and-son-spending-leisure-time-at-park.jpg?s=612x612&w=0&k=20&c=-Q60t-jQZEUJs8MEzzALlyPt-HUhN1lFibPPIDITq1M=" alt="" />
    <h1 class="review-head">Dennis</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my family's virtual meeting place! We share moments, keep in touch, and stay connected regardless of distance. The privacy features ensure our family memories remain within our circle</p>
  </div>
</div>
      </div>
      
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" alt="" />
    <h1 class="review-head">Click_Once</h1>
  </div>
  <div class="second-content">
    <p>It's actually pretty cool! The business networking features are really helpful, and I like the clean, simple interface</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/497317250/photo/new-year-party.jpg?s=612x612&w=0&k=20&c=ssF8Nl4srRSnNhToYI0GlUznz3xVVJunOnaIe1ukllA=" alt="" />
    <h1 class="review-head">Harsh</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my fitness pal! The fitness community here is motivating and supportive. From workout ideas to nutritional tips, it's a hub for maintaining a healthy lifestyle</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1623411372490-78a96bd41a09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxlciUyMHdpdGglMjBiaWtlfGVufDB8fDB8fHww" alt="" />
    <h1 class="review-head">MOTO_HEAD</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE fuels my wanderlust! I've found incredible travel communities here. Sharing my adventures and discovering hidden gems has never been more exciting. A must-have for travelers</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGVyfGVufDB8fDB8fHww" alt="" />
    <h1 class="review-head">Monkeybee</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my daily go-to! The interface is sleek, and I love the ease of connecting with friends and discovering trending content. It's a versatile platform catering to various interests</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1504732099162-d8c9d5ba3bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    <h1 class="review-head">Wanderlust</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my social haven! The seamless interface and diverse range of features make connecting with friends a breeze. From stories to groups, it's my go-to for staying updated and entertained</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6AC4VVwh-i77kLvmi1H85bHV26xwegApNw&usqp=CAU" alt="" />
    <h1 class="review-head">Sam_Sulek</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my fitness companion! The fitness groups and challenges keep me motivated. It's a supportive space to share progress, learn new routines, and stay committed to a healthy lifestyle</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1523464862212-d6631d073194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
    <h1 class="review-head">jessica</h1>
  </div>
  <div class="second-content">
    <p>I've been using ZEZONE for a few months now and I love it! It's so easy to connect with friends. I'd definitely recommend this app to anyone looking for a new social media platform. 5 stars!</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.webp?b=1&s=170667a&w=0&k=20&c=Qm92okavAxSUfDCrPWc5GyFFgwRSHk90x9yP5E4JMdc=" alt="" />
    <h1 class="review-head">JaneDoe84</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my go-to app for connecting with friends and discovering new content. The interface is clean, and I love the diverse range of features. It's intuitive and easy to use</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1035342046/photo/fair-surajkund-faridabad-haryana-india-stock-image.jpg?s=612x612&w=0&k=20&c=ZDSJJ7_E6Q89qXw6bKmemea8DvNQTuw36LaLB15qECI=" alt="" />
    <h1 class="review-head">MAD_FOoDIE</h1>
  </div>
  <div class="second-content">
    <p>As a food blogger, ZEZONE is a blessing! Sharing my food experiences is fun, and the foodie community here is vibrant. The app's design makes browsing through food content a delightful experience</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1156760847/photo/dream-flowers-princess.jpg?s=612x612&w=0&k=20&c=-QL7tdtQjmkmlPJaPJYzSSXsMCCw3wXz2bvZlDMVrA0=" alt="" />
    <h1 class="review-head">ArtisticSoul22</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is more than a social app; it's my book club! The groups and discussions here about literature are fantastic. I've discovered so many new books and made friends who share my passion for reading</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" alt="" />
    <h1 class="review-head">ArtisticSoul22</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is perfect for artists! I've found a fantastic community here to share my work with. The support and feedback from fellow creatives are invaluable. Love the creative vibe</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1403510900/photo/businessman-using-laptop-at-coffee-shop.jpg?s=612x612&w=0&k=20&c=22RdkHYsx32O6PrF1bdZFmIYFenpeQNrgv2cIWLPoKM=" alt="" />
    <h1 class="review-head">ROY</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is helping me network and grow my business. It's an excellent platform to connect with like-minded professionals, share insights, and collaborate. Great for expanding my entrepreneurial circle</p>
  </div>
</div>
      </div>
      <div className='m-2'>
      <div class="reviewcard">
  <div class="first-content">
     <img src="https://media.istockphoto.com/id/1292575759/photo/loving-parent-and-son-spending-leisure-time-at-park.jpg?s=612x612&w=0&k=20&c=-Q60t-jQZEUJs8MEzzALlyPt-HUhN1lFibPPIDITq1M=" alt="" />
    <h1 class="review-head">Dennis</h1>
  </div>
  <div class="second-content">
    <p>ZEZONE is my family's virtual meeting place! We share moments, keep in touch, and stay connected regardless of distance. The privacy features ensure our family memories remain within our circle</p>
  </div>
</div>
      </div>
      
      
    </div>

<div className='m-5'> <Carousal/></div>

   <div className='division-four'>
      <div className='p-5 mt-5'>
        <div className='div-four-inn m-1 p-2 mt-5'><h5>A New Way To Connect With World</h5></div>
        <div className='div-four-inn m-1 p-2 mt-1'><h1>Start Using Today<br></br>Create New Account Now</h1></div>
        <div className='m-1 p-2'> <button className='startButton btn text-right btn-dark rounded'><Link className='text-decoration-none' to={'/register'}>Create</Link></button>
  </div>
      </div>
   </div>
   <Footer/>
</div>


    </>
  )
}

export default Homeessential