import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import { SignupUser } from '../services/auth-services';

export const SignUp = () => {
    const navigate= useNavigate()
    const {authDispatch} = useAuth()
    const [signUpForm,setSignUpForm] = useState({name:'',email:'',password:''})

    // handle submit
    const handleSubmit =async (e)=>{
        e.preventDefault();
        await SignupUser(signUpForm.name,signUpForm.email,signUpForm.password,authDispatch)
    }
    // handle sign up
    const handleSignUp = ()=>{
        setSignUpForm((form)=>({
            ...form,
        }))
        navigate('/login')
    }

  return (
    <div className="container mx-auto px-1">
        <form className='max-w-sm my-12 mx-auto p-4 border-2 border-primary 
        border-solid flex flex-col justify-center items-center gap-4' onSubmit={ handleSubmit}>
            <h1 className="text-2xl text-primary">Sign Up</h1>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label>Name</label>
                <input type="text" placeholder="enter name" className="p-2 outline outline-1" value={signUpForm.name}
                onChange={(e)=>setSignUpForm((form)=>({...form,name:e.target.value}))} />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={signUpForm.email}
                onChange={(e)=>setSignUpForm((form)=>({...form,email:e.target.value}))} />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label>Password</label>
                <input type="password" className="p-2 outline outline-1" value={signUpForm.password}
                onChange={(e)=>setSignUpForm((form)=>({...form,password:e.target.value}))} />
            </div>
            <button type='submit' className="p-1.5 w-10/12 text-white rounded border-none bg-primary 
            hover:bg-primary-dark" onClick={handleSignUp}>
                Sign Up
            </button>  
            <p>Already have an account ?<Link to='/login' className="text-primary-dark">Sign in</Link></p>            
        </form>
    </div>
  )
}

