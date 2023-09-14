import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

async function getCatalogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?populate=*`)

  if (!res.ok) throw new Error('Failed to fetch data')
  
  return res.json()
}

async function deleteCatalogsItem() {  
  const res = await fetch('https://example.com/delete-item/' + id, { method: 'DELETE' })
  // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?populate=*`)

  if (!res.ok) throw new Error('Failed to fetch data')
  
  return res.json()
}

export default async function Page() {
  const catalogs = await getCatalogs()

  // const getCatalog = async (id) => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${id}?populate=*`)
  //   console.log(res.json())
  // }

  return (
    <div className='catalogs'>
      {catalogs.data.map(catalog => {
        return (
          <div className='catalog' key={catalog.id}>
            <div className='media_container'>
              <a href={`/${catalog.attributes.slug}`}>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + catalog.attributes.images.data[0].attributes.url} width={600} height={600} alt={`${catalog.attributes.name}`}/>  
              </a>

              <div className='delete'><MdDeleteOutline/></div>
            </div>

            <h2>{catalog.attributes.name}</h2>
          </div>
        )
      })}

      <div className='catalog last_element'><AiOutlinePlusCircle/></div>
    </div>
  )
}
