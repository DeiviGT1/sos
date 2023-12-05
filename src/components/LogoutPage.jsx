import React from "react";
import Header from "./Header";
import { useAuth } from "../components/auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) =>{
    e.preventDefault();
    auth.logout()
  }

  return (
    <>
      <Header />
      <h1>Login</h1>
      <form onSubmit={logout}>
        <label htmlFor=""> Seguro de que quieres salir? </label>
        
        <button type="submit">Salir</button>
      </form>

    </>
  );
}

export default LogoutPage;