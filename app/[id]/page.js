// "use server"

import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";


export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${context.query.id}?populate=images`);
    const data = await res.json();

    console.log(context.query.id)
  
    return { props: { data } };
};

export default function Page({data}) {
    return (
        <div className='catalogs__item'>
            {console.log(data)}
        </div>
    )
}
