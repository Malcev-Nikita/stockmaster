"use client"

import Image from 'next/image'


export default function AuthButton() {
    if(JSON.parse(localStorage.getItem('User_Data')).id) {
        const data = JSON.parse(localStorage.getItem('User_Data'))
        
        return (
            <div className='auth profile'>
                <a href='/profile'>
                    <div className='name'>{data.name}</div>
                    <div className='username'>@{data.username}</div>

                    <Image width="60" height="60" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.avatar[0].url}`} alt=''/>
                </a>
            </div>
        )
    }
    else {
        return (
            <div className='auth'>
                <a href='/auth'>Авторизация</a>
            </div>
        )
    }
}
