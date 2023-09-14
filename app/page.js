"use client"

import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

async function getCatalogs() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/stock-master-catalogs?populate=images')
  return res.json()
}

export default async function Page() {
  const catalogs = await getCatalogs()

  const getCatalog = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${id}?populate=images`)
    console.log(res.json())
  }

  return (
    <main>
      <div className='catalogs'>
        {catalogs.data.map(catalog => {
          return (
            <div className='catalog' key={catalog.id}>
              <div className='media_container'>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + catalog.attributes.images.data[0].attributes.url} width={600} height={600} alt="test"/>  

                <button className='edit' onClick={(e) => getCatalog(catalog.id)}> <BsPencil/> </button>

                <div className='delete'><MdDeleteOutline/></div>
              </div>

              <h2>{catalog.attributes.name}</h2>
            </div>
          )
        })}

        <div className='catalog last_element'><AiOutlinePlusCircle/></div>
      </div>
    </main>
  )
}
