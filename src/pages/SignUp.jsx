import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { SignupUser } from '../services/auth-services';
import { useDispatch } from 'react-redux';
import { FAILURE, SIGNUP } from 'features/authentication/authSlice';
import { toast } from "react-toastify";

export const SignUp = () => {
    const navigate= useNavigate()
    const [signUpForm,setSignUpForm] = useState({name:'',username:'',email:'',password:''})
    const authDispatch = useDispatch()       

    // handle submit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{          
            const {data} = await SignupUser(signUpForm.name,signUpForm.username,signUpForm.email,signUpForm.password)
            const user = {
                token:data.encodedToken,
                user:data.createdUser
            }
            localStorage.setItem('user',JSON.stringify(user));
            console.log('form',signUpForm)
            authDispatch(SIGNUP(user));
            toast.success('Signed Up successfully!')  
            navigate('/login')          
        }catch(err){
            console.error(err)
            authDispatch(FAILURE(err));
            toast.error("Can't sign up, please try again")
        }    
    }
    // handle sign up
    const handleSignUp = ()=>{
        setSignUpForm((form)=>({
            ...form,
        }))            
    }

  return (
    <div className="flex flex-col  justify-center  px-1 mb-12 md:flex-row mt-12">
        <div className='tag-container text-center p-6 max-w-sm bg-light flex flex-col md:w-auto '>
            <div className='m-auto'>
            <h4 className='font-oleo text-primary text-6xl'>Vivid</h4>
            <span className='font-oleo text-xl'>share your vivid thoughts and feelings via  <span className='text-primary-dark'>Vivid</span></span>
            </div>
        </div>
        <form className='max-w-sm  p-4 bg-white rounded-md flex flex-col 
        justify-center items-center gap-4 md:w-96' onSubmit={ handleSubmit}>
            <h1 className="text-3xl text-primary font-oleo">Sign Up</h1>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>Name</label>
                <input type="text" placeholder="enter name" className="p-2 outline outline-1" value={signUpForm.name}
                onChange={(e)=>setSignUpForm((form)=>({...form,name:e.target.value}))}required/>
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>UserName</label>
                <input type="text" placeholder="enter username" className="p-2 outline outline-1" value={signUpForm.username}
                onChange={(e)=>setSignUpForm((form)=>({...form,username:e.target.value}))} required />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={signUpForm.email}
                onChange={(e)=>setSignUpForm((form)=>({...form,email:e.target.value}))} required />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>Password</label>
                <input type="password" className="p-2 outline outline-1" value={signUpForm.password}
                onChange={(e)=>setSignUpForm((form)=>({...form,password:e.target.value}))} required />
            </div>
            <button type='submit' className="p-1.5 w-10/12 rounded border-none bg-primary 
            hover:bg-primary-dark" onClick={handleSignUp}>
                Sign Up
            </button>  
            <p>Already have an account ?&nbsp;
                <Link to='/login' className="text-primary-dark hover:text-pista-dark">
                    Sign in</Link>
            </p>            
        </form>
    </div>
  )
}

