import React from "react";
import { useAuth } from "../components/auth";
import Header from "../components/Header";

function Profile() {
  const auth = useAuth();

  return (
    <>
      <Header />
      <h1>Profile</h1>
      <p>Welcome, {auth.user.userName}</p>
    </>  
  );
}

export default Profile;