import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../Users/usersDB";
import {addUser} from "../Users/users";

function Register() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const maxId = Math.max(...users.map(user => user.id), 0);
    const newUser = {
      id: maxId + 1,
      ...formData,
    };
    try{
      addUser(newUser);
      nav('/login');
    } catch (error) {
      alert(error.message)
    }
    
  }


  

  return (
    <div>
      
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Register;