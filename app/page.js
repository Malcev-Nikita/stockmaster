'use client'

import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

async function getCatalogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?populate=*`)

  if (!res.ok) throw new Error('Failed to fetch data')
  
  return res.json()
}

async function deleteCatalogsItem(id) {  
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${id}`, { method: 'DELETE' })
  // fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?populate=*`)

  if (!res.ok) throw new Error('Failed to fetch data')
  
  return res.json()
}

let idCatalogItem = null;

function deleteConfirmed(id) {
  document.querySelector('.delete_confirmed').classList.add('active')

  idCatalogItem = id
}

function deleteConfirmedClose() {
  document.querySelector('.delete_confirmed').classList.remove('active')
}

export default async function Page() {
  const catalogs = await getCatalogs()

  return (
    <div className='catalogs'>
      {catalogs.data.map(catalog => {
        return (
          <div className='catalog' key={catalog.id}>
            <div className='media_container'>
              <a href={`/${catalog.attributes.slug}`}>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + catalog.attributes.images.data[0].attributes.url} width={600} height={600} alt={`${catalog.attributes.name}`}/>  
              </a>

              <div className='delete' onClick={() => deleteConfirmed(catalog.id)}><RiDeleteBin5Line/></div>
            </div>

            <h2>{catalog.attributes.name}</h2>
          </div>
        )
      })}

      <div className='catalog last_element'><AiOutlinePlusCircle/></div>

      <div className='delete_confirmed'>
        <div className='fancy_close'></div>

        <div className='container'>
          <h6>Вы точно хотите удалить этот товар?</h6>

          <button className='cancel' onClick={deleteConfirmedClose}>Отмена</button>
          <button className='delete' onClick={deleteCatalogsItem}>Удалить</button>
        </div>
      </div>
    </div>
  )
}
