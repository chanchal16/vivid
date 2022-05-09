import React,{useReducer,createContext,useContext} from 'react'
import { authReducer } from '../reducers/auth-reducer';

const AuthContext = createContext();
const initialState = {
    user: null,
    error: "",
  };

const AuthContextProvider = ({children}) => {
    const [authState,authDispatch] = useReducer(authReducer,initialState)
  return (
    <div>
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
const useAuth = ()=>useContext(AuthContext);
export {AuthContextProvider,useAuth}