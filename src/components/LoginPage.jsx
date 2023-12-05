import React from "react";
import divLog from "./Log.module.css";
import { useAuth } from "../components/auth";

function LoginPage() {
  const auth = useAuth();
  const [userName, setUserName] = React.useState('');

  const login = (e) =>{
    e.preventDefault();
    auth.login({userName})
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