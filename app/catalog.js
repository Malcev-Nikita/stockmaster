'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

async function deleteCatalogsItem() {  
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${sessionStorage.getItem("idCatalogItem")}`, { method: 'DELETE' })

  if (!res.ok) throw new Error('Failed to fetch data')

  document.querySelector('.delete_confirmed').classList.remove('active')
  document.querySelector('body').style.overflow = "auto"

  location.reload()
  
  return res.json()
}

function deleteConfirmed(id) {
  document.querySelector('.delete_confirmed').classList.add('active')
  document.querySelector('body').style.overflow = "hidden"
  sessionStorage.setItem("idCatalogItem", id);
}

function deleteConfirmedClose() {
  document.querySelector('.delete_confirmed').classList.remove('active')
  document.querySelector('body').style.overflow = "auto"
  sessionStorage.setItem("idCatalogItem", null);
}

export default function Catalog({catalogs}) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className='catalogs'>
      <input type="text" name="search" placeholder='Поиск товара' onChange={(e) => setSearchText(e.target.value)} />

      {catalogs.data.map(catalog => {

        if(catalog.attributes.name.toLowerCase().includes(searchText.toLowerCase().trim()) || searchText.toLowerCase().trim().length == 0) {
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
        }
      })}

      <div className='catalog last_element'><AiOutlinePlusCircle/></div>

      <div className='delete_confirmed'>
        <div className='fancy_close' onClick={deleteConfirmedClose}></div>

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
