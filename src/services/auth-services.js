import axios from "axios";

const LoginUser = async(email,password,dispatch)=>{
    try{
        const {
            data: { foundUser, encodedToken }
          } = await axios.post("api/auth/login",{email,password})
        const user = {
            token:encodedToken,
            user:foundUser
        }
        localStorage.setItem('user',JSON.stringify(user))
        dispatch({type:'UPDATE_USER',payload:user})
    }catch(err){
        localStorage.clear();
        dispatch({type:'FAILURE',payload:err})
        console.error('Cannot login',err)
    }
}

// signup user
const SignupUser = async(name,email,password,dispatch)=>{
    try{
        const {
            data: { createdUser, encodedToken }
          } = await axios.post("api/auth/signup",{name,email,password})
        const user = {
            token:encodedToken,
            user:createdUser
        }
        localStorage.setItem('user',JSON.stringify(user))
        dispatch({type:'UPDATE_USER',payload:user})
    }catch(err){
        localStorage.clear();
        dispatch({type:'FAILURE',payload:err})
        console.error('Cannot sign-up,please try again later',err)
    }
}
export{LoginUser,SignupUser}