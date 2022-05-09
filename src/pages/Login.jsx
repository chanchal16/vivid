import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import { LoginUser } from '../services/auth-services';

export const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const {authDispatch,authState} = useAuth()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        await LoginUser(loginForm.email,loginForm.password,authDispatch)
    }
    console.log('user',authState)

    const HandleLogin=() =>{
        setLoginForm((form)=>({
            ...form,
            email: "testing@test.com",
            password: "test123",
        }));
    }
  return (
    <div className="container px-1">
        <form className='max-w-sm my-12 mx-auto p-4 border-2 border-orange-300 border-solid flex flex-col
         justify-center items-center gap-4' onSubmit={ handleSubmit}>
            <h1 className="text-2xl text-orange-300">Log In</h1>
            <div className="flex flex-col text-sm text-slate-400 w-10/12 ">
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={loginForm.email}
                onChange={(e)=>setLoginForm((form)=>({...form,email:e.target.value}))} />
            </div>
            <div className="flex flex-col text-sm text-slate-400 w-10/12 ">
                <label>Password</label>
                <input type="password" className="p-2 outline outline-1" value={loginForm.password}
                onChange={(e)=>setLoginForm((form)=>({...form,password:e.target.value}))} />
            </div>
            <button type='submit' className="p-1.5 w-10/12 text-white rounded border-none bg-orange-300 hover:bg-orange-600">Login</button>
            <button className="p-1.5 w-10/12 text-white rounded border-none bg-pink-300 hover:bg-pink-400" onClick={()=>HandleLogin()}>Guest Login</button>
            <div>
                <input type="checkbox" /> <label> Remember me</label> 
            </div>
            <p>Don't have an account ?
                <Link to='/signup' className="text-orange-300">
                    SignUp</Link>
            </p>
        </form>
    </div>
  )
}

