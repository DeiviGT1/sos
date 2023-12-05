import React from "react";
import divLog from "./Log.module.css"
import { useAuth } from "../components/auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) =>{
    e.preventDefault();
    auth.logout()
  }

  return (
    <div className={divLog.log}>

      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label htmlFor=""> Seguro de que quieres salir? </label>
        
        <button type="submit">Salir</button>
      </form>

    </div>
  );
}

export default LogoutPage;