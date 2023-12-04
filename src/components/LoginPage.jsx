import React from "react";
import Header from "../components/Header";

function LoginPage() {
  const [userName, setUserName] = React.useState('');

  const login = (e) =>{
    e.preventDefault();
    localStorage.setItem('userName', userName);
    // window.location.href = '/';
    console.log(userName)
  }

  return (
    <>
      <Header />
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor=""> Escribe tu nombre de usuario: </label>
        <input type="Usuario"
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default LoginPage;