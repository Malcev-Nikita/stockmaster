"use client"

import React, { useState } from 'react';


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
  fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  })
  .then((data) => {
    localStorage.setItem('User_JWT', data.jwt);
  })
  .catch((error) => {
    document.querySelector('.auth_error').classList.add('active');
  });


  fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=avatar`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('User_JWT')}`,
    },
  })
  .then((data) => {
    localStorage.setItem('User_Data', JSON.stringify(data));
    document.location.reload();
  })
  .catch((error) => {
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
