import React from 'react'

function AddPost() {
  return (
    <>
        




        <div className="main">
        <div className="container a-container" id="a-container">
          <form className="form" id="a-form" method="post" action="signup.php">
            <h2 className="form_title title">Create Account</h2>
            <input className="form__input" type="text" placeholder="Name" name="username" />
            <input className="form__input" type="text" placeholder="Email" name="email" />
            <input className="form__input" type="password" placeholder="Password" name="password" />
            <button className="form__button button switch-btn" type="submit" name="signup">SIGN UP</button>
          </form>
        </div>
        <div className="container b-container" id="b-container">
          <form className="form" id="b-form" method="post" action="index.html">
            <h2 className="form_title title">Sign in to Website</h2>
            <input className="form__input" type="text" placeholder="Email" name="email" />
            <input className="form__input" type="password" placeholder="Password" name="password" />
            <button className="form__button button switch-btn" name="signin">SIGN IN</button>
          </form>
        </div>
        <div className="switch" id="switch-cnt">
          <div className="switch__circle" />
          <div className="switch__circle switch__circle--t" />
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">To keep connected with us please login with your personal info</p>
            <button className="switch__button button switch-btn">GO TO SIGN IN</button>
          </div>
          <div className="switch__container is-hidden" id="switch-c2">
            <h2 className="switch__title title">Hello Friend !</h2>
            <p className="switch__description description">Enter your personal details and start journey with us</p>
            <button className="switch__button button switch-btn">GO TO SIGN UP</button>
          </div>
        </div>
      </div>
  



        
    </>
  )
}

export default AddPost