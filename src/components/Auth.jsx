import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Auth({ register }) {

    const navigate = useNavigate()

    const[userData,setuserData] = useState({
        username:"",
        email:"",
        password:""
    }) 
    //console.log(userData)
// register
const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = userData

    if(!username || !email || !password){
        toast.info('Please Fill the form Completely')
    }
    else{
        const result = await registerAPI(userData)
       // console.log(result);
       if(result.status==200){
        toast.success(`${result.data.username},sucessfully Registered`)
        setuserData({
            username:"",
            email:"",
            password:""
        })
        navigate('/login')
       }
       else{
        toast.error(`Something went Wrong,Please try after some time`)
        console.log(`REGISTRATION ERROR,${result.response.data}`);
       }
    }
}

//login
const handleLogin =async (e)=>{
    e.preventDefault()

    const{email,password} = userData

    if(!email || !password){
        toast.info('Please Fill the form Completely')
    }
    else{
        const result = await loginAPI(userData)
       // console.log(result);
       if(result.status==200){
        toast.success('login sucess')
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setuserData({
            email:"",
            password:""
        })
        setTimeout(() => {
            navigate('/')
        }, 2000);
       
       }
       else{
        toast.error(result.response.data)
       }
    }
}
    const isRegisterForm = register ? true : false
    return (
        <>
            <div className='auth d-flex justify-content-center align-items-center p-3 ' style={{ height: "100vh" }}>

<div className='border auth-form p-4'>
    
                    <form>
                        <p className='text-center text-light' style={{ fontSize: '30px' }}>{isRegisterForm ? "Create New Account" : "Login to Your Account"}</p>
    
    
                        {isRegisterForm && <div class="form-outline mb-2">
                            <input type="text" id="form2Example11" class="form-control"
                                placeholder="Username" onChange={(e)=>setuserData({...userData,username:e.target.value})}/>
    
                        </div>}
                        <div class="form-outline mb-2">
                            <input type="email" id="form2Example11" class="form-control"
                                placeholder="email address" onChange={(e)=>setuserData({...userData,email:e.target.value})}/>
    
                        </div>
    
                        <div class="form-outline mb-2">
                            <input type="password" id="form2Example22" class="form-control" placeholder="password" onChange={(e)=>setuserData({...userData,password:e.target.value})}/>
    
                        </div>
    
                    { isRegisterForm?   <div class="text-center pt-1 mb-2">
                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-1 w-100 rounded" type="button" onClick={handleRegister}>Register
                            </button>
                        </div>:
                            <div class="text-center pt-1 mb-2">
                            <button onClick={handleLogin} class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-1 w-100 rounded" type="button">Login
                            </button>
                        </div>
                        }
    
                        {isRegisterForm ?
                            <div class="d-flex align-items-center justify-content-center">
                                <p class="mb-0 me-2">Already a user,<Link to={'/login'} className='text-danger'>Login</Link></p>
                            </div>
                            :
                            <div class="d-flex align-items-center justify-content-center ">
                                <p class="mb-0 me-2">New user,<Link to={'/register'} className='text-danger'>Create New Account</Link></p>
                            </div>}
                        <Link to={'/'} style={{ textDecoration: 'none',color:'white' }}><i class="fa-solid fa-arrow-left me-3 text-light"></i>Back to Home</Link>
                    </form>
</div>
            </div>
            <ToastContainer position='top-right' autoClose={1500} theme='colored' />
        </>
    )
}

export default Auth