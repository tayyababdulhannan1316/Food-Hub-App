import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const initialState = {isAuth:false , user:{}}
const AuthProvider = ({children}) => {
    const [state , setState] = useState(initialState)
  return (
    <AuthContext.Provider value={{...state , setContextState:setState}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider
