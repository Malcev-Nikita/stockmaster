"use client"


export default async function Page() {
    return (
        <div className='auth'>
            <h2>Авторизация</h2>

            <input type="email" name="EMAIL" placeholder="Email" />
            <input type="password" name="PASSWORD" placeholder="Пароль"/>

            <button>Авторизация</button>
        </div>
    )
}
