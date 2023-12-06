import React from "react";
import { useAuth } from "./LogMod/auth";

function Profile() {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user?.name}</p>

      {auth.user?.isAdmin && (
        <p>Admin privileges granted!</p>)}
    </>
  );
}

export default Profile;