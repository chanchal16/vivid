import React from 'react'
import {AuthContextProvider} from './AuthContext'

const MainProvider = ({children}) => {
  return (
    <div>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    </div>
  )
}
export {useAuth} from './AuthContext';
export {MainProvider}