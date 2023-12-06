import React from 'react';

const users = require('./usersDB')['default'];

function getUser(username) {
  
  return users.find(user => user.username === username);
}

function addUser(newUser) {
  if (getUser(newUser.username)) {
    throw new Error('Username already exists');
  }
  users.push(newUser);
  };


function validateUser(username, password) {
  const user = getUser(username);
  return user && user.password === password;
}

export { getUser, addUser, validateUser };