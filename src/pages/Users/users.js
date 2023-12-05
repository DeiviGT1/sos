import React from 'react';

const users = require('./usersDB');

function getUser(username) {
  return "hola"
}

function addUser(newUser) {
  users.push(newUser);
}

function validateUser(username, password) {
  const user = getUser(username);
  return user && user.password === password;
}

export { getUser, addUser, validateUser };