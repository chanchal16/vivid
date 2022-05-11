import axios from "axios";
// login user
const LoginUser = async(email,password)=>{
    return await axios.post("api/auth/login",{email,password})
}

// signup user
const SignupUser = async(name,email,password)=>{
    return await axios.post("api/auth/signup",{name,email,password})
}
export{LoginUser,SignupUser}