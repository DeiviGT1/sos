import React from "react";
import divLog from "./Log.module.css";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = (e) =>{
    e.preventDefault();
    auth.login({userName})
  }

  if  (auth.user) {
    return (<Navigate to="/profile" />)
  }

  return (
    <div className={divLog.log}>
      <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor=""> Escribe tu nombre de usuario: </label>
        <input type="Usuario"
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <label htmlFor=""> Escribe tu contraseña: </label>
        <input type="Password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;