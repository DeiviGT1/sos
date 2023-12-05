import React from "react"
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }){
  const nav = useNavigate()
  const [user, setUser] = React.useState(null)

  const login = ( userName ) =>{
    setUser(userName)
    nav("/profile")
  }

  const logout =  () =>{
    setUser(null)
    nav("/")
  }

  const auth = {user, login, logout}

  return(
    <AuthContext.Provider value={auth}>
      {children}
      </AuthContext.Provider>
  )
}

function useAuth(){
  const context = React.useContext(AuthContext)
  if(context === undefined){
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}

function AuthRoute( {children} ){
  const auth = useAuth()

  if (!auth.user){
    return <Navigate to="/login" />
  }
  return children
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
}