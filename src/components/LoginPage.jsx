import React from "react";
import { useAuth } from "../components/auth";
import { useNavigate } from "react-router-dom";
import divLog from "./Log.module.css"

function LoginPage() {
  const auth = useAuth();
  const [userName, setUserName] = React.useState('');
  const nav = useNavigate();

  const login = (e) =>{
    e.preventDefault();
    auth.login({userName})
  }

  if (auth.user) {
    console.log(auth.user)
    return nav('/profile')
  }

  return (
    <div className={divLog.log}>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor=""> Escribe tu nombre de usuario: </label>
        <input type="Usuario"
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;