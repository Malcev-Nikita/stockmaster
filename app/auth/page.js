"use client"

import React, { useState } from 'react';

function Auth(email, password) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(email.match(emailRegex) && password.length >= 3) {
        document.querySelector('.auth_succes').classList.add('active')
    }
    else {
        document.querySelector('.auth_error').classList.add('active')
    }
}

export default function Page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    return (
        <div className='auth'>
            <h2>Авторизация</h2>

            <input type="email" name="EMAIL" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="PASSWORD" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => Auth(email, password)}>Авторизация</button>



            <div className='auth_error'>
                <div className='fancy_close'></div>

                <div className='container'>
                    <h6>Ошибка, повторите попытку позже!</h6>
                </div>
            </div>

            <div className='auth_succes'>
                <div className='fancy_close'></div>

                <div className='container'>
                    <h6>Вы авторизовались в системе!</h6>
                </div>
            </div>
        </div>
    )
}
