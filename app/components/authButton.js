"use client"

import Image from 'next/image'


export default function AuthButton() {
    const data = JSON.parse(localStorage.getItem('User_Data'))

    if(localStorage.getItem('User_Data') == null) {
        return (
            <div className='auth'>
                <a href='/auth'>Авторизация</a>
            </div>
        )
    }
    else {
        return (
            <div className='auth profile'>
                <a href='/profile'>
                    <div>{data.surname} {data.name} {data.patronymic}</div>

                    <Image width="60" height="60" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.avatar[0].url}`} alt=''/>
                </a>
            </div>
        )
    }
}
