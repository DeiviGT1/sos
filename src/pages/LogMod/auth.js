import React from "react"
import { useNavigate, Navigate } from "react-router-dom";
import { getUser, addUser, validateUser } from "../Users/users"

const AuthContext = React.createContext();
const adminList = ["admin", "root", "superuser"]

function AuthProvider({ children }){
  const nav = useNavigate()
  const [user, setUser] = React.useState(null)

  const login = ( username, password ) =>{
    const isAdmin = adminList.includes(username.userName)
    const name = username.userName
    if (validateUser(username.userName, username.password)){
      setUser( { name, isAdmin} )
      nav("/profile")  
    } else {
      alert("Usuario o contraseña incorrectos")
    } 
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