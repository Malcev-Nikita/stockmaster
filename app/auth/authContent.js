"use client"

import React, { useState } from 'react';
import axios from 'axios';


function Auth(email, password) {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if(email.match(emailRegex) && password.length >= 3) {
    authUser(email, password)
  }
  else {
    document.querySelector('.auth_error').classList.add('active')
  }
}

function authUser(email, password) {
  axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
    identifier: email,
    password: password,
  })
  .then(async response => {
    localStorage.setItem('User_JWT', response.data.jwt);
    getAvatar(response.data.jwt)
  })
  .catch(error => {
    document.querySelector('.auth_error').classList.add('active');
  });
}

function getAvatar(JWT) {
  axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=avatar`, {
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  })
  .then(response => {
    localStorage.setItem('User_Data', JSON.stringify(response.data));

    window.location.href = '/'
  })
  .catch(error => {
    document.querySelector('.auth_error').classList.add('active');
  });
}


export default function AuthContent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  return (
      <div className='content'>
        <h2>Авторизация</h2>

        <input type="email" name="EMAIL" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="PASSWORD" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={() => Auth(email, password)}>Авторизация</button>
      </div>
  )
}
