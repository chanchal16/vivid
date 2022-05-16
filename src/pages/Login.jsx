import { FAILURE, LOGIN } from 'features/authentication/authSlice';
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate,useLocation,Navigate} from 'react-router-dom'
import { LoginUser } from '../services/auth-services';

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
            authDispatch(LOGIN(user))
            // navigate('/')
        }
        catch(err){
            console.error(err)
            authDispatch(FAILURE(err))
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
    <div className="container px-1">
        <form className='max-w-sm my-12 mx-auto p-4 border-2 border-primary border-solid flex flex-col
         justify-center items-center gap-4' onSubmit={ handleSubmit}>
            <h1 className="text-2xl text-primary">Log In</h1>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="p-2 outline outline-1" value={loginForm.email}
                onChange={(e)=>setLoginForm((form)=>({...form,email:e.target.value}))} />
            </div>
            <div className="flex flex-col text-sm text-gray w-10/12 ">
                <label>Password</label>
                <input type="password" className="p-2 outline outline-1" value={loginForm.password}
                onChange={(e)=>setLoginForm((form)=>({...form,password:e.target.value}))} />
            </div>
            <button type='submit' className="p-1.5 w-10/12 text-white rounded border-none bg-primary hover:bg-primary-dark">Login</button>
            <button className="p-1.5 w-10/12 text-white rounded border-none bg-pista hover:bg-pista-dark" onClick={()=>HandleLogin()}>Guest Login</button>
            <div>
                <input type="checkbox" /> <label> Remember me</label> 
            </div>
            <p>Don't have an account ?
                <Link to='/signup' className="text-primary">
                    SignUp</Link>
            </p>
        </form>
    </div>
  )
}

