import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Auth({ register }) {

    const isRegisterForm = register ? true : false


    return (
        <>
            <div className='d-flex justify-content-center align-items-center p-3 bg-dark' style={{ height: "100vh" }}>

<div className='border auth-form p-4'>
    
                    <form>
                        <p className='text-center text-light' style={{ fontSize: '30px' }}>{isRegisterForm ? "Create New Account" : "Login to Your Account"}</p>
    
    
                        {isRegisterForm && <div class="form-outline mb-2">
                            <input type="text" id="form2Example11" class="form-control"
                                placeholder="Username" />
    
                        </div>}
                        <div class="form-outline mb-2">
                            <input type="email" id="form2Example11" class="form-control"
                                placeholder="email address" />
    
                        </div>
    
                        <div class="form-outline mb-2">
                            <input type="password" id="form2Example22" class="form-control" placeholder="password" />
    
                        </div>
    
                        <div class="text-center pt-1 mb-2">
                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-1 w-100" type="button">Login
                            </button>
    
                        </div>
    
                        {isRegisterForm ?
                            <div class="d-flex align-items-center justify-content-center ">
                                <p class="mb-0 me-2">Already a user,<Link to={'/login'} className='text-danger'>Login</Link></p>
                            </div>
                            :
                            <div class="d-flex align-items-center justify-content-center ">
                                <p class="mb-0 me-2">New user,<Link to={'/register'} className='text-danger'>Create New Account</Link></p>
                            </div>}
                        <Link to={'/'} style={{ textDecoration: 'none', }}><i class="fa-solid fa-arrow-left me-3 text-light"></i>Back to Home</Link>
                    </form>
</div>
            </div>
        </>
    )
}

export default Auth