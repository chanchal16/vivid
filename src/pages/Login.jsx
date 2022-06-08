import { FAILURE, LOGIN } from 'features/authentication/authSlice';
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate,useLocation,Navigate} from 'react-router-dom'
import { LoginUser } from '../services/auth-services';
import { toast } from "react-toastify";

export const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const authState = useSelector(state => state.auth);
    const authDispatch = useDispatch()        
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
           const {data} = await LoginUser(loginForm.email,loginForm.password)
            const user = {
                token:data.encodedToken,
                user:data.foundUser
            }
            localStorage.setItem('user',JSON.stringify(user));
            authDispatch(LOGIN(user));
            toast.success('Logged In successfully!')
            // navigate('/')
        }
        catch(err){
            console.error(err)
            authDispatch(FAILURE(err))
            toast.error("Can't login,please try again")
        }       
    }
    // handle guest login
    const HandleLogin=() =>{
        setLoginForm((form)=>({
            ...form,
            email: "testing@test.com",
            password: "test123",
        }));       
    }
    if (authState.user?.user) {
        return <Navigate to={from || "/"} replace />;
    }
  return (
    <div className="container px-1 my-12">
        <div className='text-center p-4'>
            <span className='font-oleo text-xl'>share your vivid thoughts and feelings via  <span className='text-primary-dark'>Vivid</span></span>
        </div>
        <form className='max-w-sm  mx-auto px-2 py-6  bg-white  rounded-md flex flex-col
         justify-center items-center gap-4' onSubmit={ handleSubmit}>
            <h1 className="text-3xl text-primary font-oleo">Log In</h1>         
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={loginForm.email}
                onChange={(e)=>setLoginForm((form)=>({...form,email:e.target.value}))} />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label className='font-oleo'>Password</label>
                <input type="password" className="p-2 outline outline-1" value={loginForm.password}
                onChange={(e)=>setLoginForm((form)=>({...form,password:e.target.value}))} />
            </div>
            <button type='submit' className="p-1.5 w-10/12  rounded border-none bg-primary hover:bg-primary-dark">Login</button>
            <button className="p-1.5 w-10/12  rounded border-none bg-pista hover:bg-pista-dark" onClick={()=>HandleLogin()}>Guest Login</button>
            <p>Don't have an account ?&nbsp;
                <Link to='/signup' className="text-primary-dark hover:text-pista-dark">
                    SignUp</Link>
            </p>
        </form>
    </div>
  )
}

