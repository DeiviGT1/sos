import React from "react";
import { useAuth } from "../components/auth";

function Profile() {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user?.userName}</p>
    </>
  );
}

export default Profile;