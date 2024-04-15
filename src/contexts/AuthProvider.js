import React, { useState, useEffect, useContext } from "react"

const defaultState = {
  user:{},
  setUser: ()=>{}
}

const AuthContext = React.createContext(defaultState)

function AuthProvider({ children }) {
    const [user,setUser] = useState(null)

  
  return (
    <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

export function useAuthContext() {
  return useContext(AuthContext)
}
