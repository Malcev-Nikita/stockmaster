'use client'

import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Catalog() {
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

          <div className='buttons'>
            <button className='cancel' onClick={deleteConfirmedClose}>Отмена</button>
            <button className='delete' onClick={deleteCatalogsItem}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
