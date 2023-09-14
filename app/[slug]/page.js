import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

async function getData(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?filters[slug][$eqi]=${slug}&populate=*`)
   
    if (!res.ok) throw new Error('Failed to fetch data')
   
    return res.json()
}

export default async function Page({params}) {
    const data = await getData(params.slug)

    return (
        <div className='catalogs__item'>
            
        </div>
    )
}
