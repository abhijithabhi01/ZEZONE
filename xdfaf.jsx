

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        
<input type="text" name="text" class="input" ></input>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {searchuser?allusers.map((item)=>(
    <Dropdown.Item>
    <Link to={`/userprofile/${item.username}`} className='text-info fs-1 text-center'style={{textDecoration:'none'}}>
      {item.username}
    </Link>
  </Dropdown.Item>
  
  ))
  :
  <h1 className='text-center text-light mt-5'>User not exist</h1>
  }
        
      </Dropdown.Menu>
    </Dropdown>
