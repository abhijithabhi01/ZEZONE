












{userpostresult?.length > 0 ? userpostresult.map((item) => (
  <Card key={item._id} className='div-userpost' style={cardStyle}>
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

<button
          type="button"
          className={`like ms-2 fs-2 `}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => handleLike(item.Id)}
        >
          <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i>
        </button>
        <button
          type="button"
          className={`like ms-2 fs-2 `}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => handleDislike(item.Id)}
        >
          <i className="fa-regular fa-heart" style={{ color: '#ff0000' }}></i>
        </button>

{/* {isliked ? (
 <button
   type='button'
   className={`like ms-2 fs-2 `}
   style={{ background: 'none', border: 'none', cursor: 'pointer' }}
  onClick={(e)=>handlelike(item.Id)}
 >
   <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i>
 </button>
) : (
 <button
   type='button'
   className={`like ms-2 fs-2 `}
   style={{ background: 'none', border: 'none', cursor: 'pointer' }}
   onClick={(e)=>handledislike(item.Id)}
 >
   <i className="fa-regular fa-heart" style={{ color: '#ff0000' }}></i>
 </button>
)} */}
 
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
)) :
  <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
    <Spinner animation="border" role="status" variant='light'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
}