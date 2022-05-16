import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Outlet,useLocation} from 'react-router-dom'

export function RequireAuth() {
    const authState = useSelector(state => state.auth)
    const {user} = authState
    const location = useLocation()
  if( user?.user){
    return <Outlet/>
  } 
  return <Navigate to='/login' state={{from:location}} replace/>
}