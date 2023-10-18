"use client"

import React, { useState } from 'react';


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
