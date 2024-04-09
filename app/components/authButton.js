"use client"

import Image from 'next/image'


export default function AuthButton() {
    try {
        if(localStorage.getItem('User_JWT') !== null) {
            const data = JSON.parse(localStorage.getItem('User_Data'))
            
            return (
                
                <div className='auth profile'>
                    <a href='#'>
                        <div className='name'>{data.name} {data.surname}</div>
                        <div className='username'>@{data.username}</div>
    
                        <Image width="60" height="60" src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.avatar.url}`} alt=''/>
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
    } catch (error) {
        return error;
    }
}
