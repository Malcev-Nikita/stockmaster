"use client"

import React, { useState } from 'react';
import {markdown} from 'markdown';
import Image from 'next/image'

async function updateCatalogsItem(id, data) {  
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs/${id}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data: data
        }),
    })
  
    if (!res.ok) throw new Error('Failed to fetch data')
  
    location.reload()
    
    return res.json()
  }


export default function EditComponent({data}) {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(data.attributes.name)
    const [description, setDescription] = useState(data.attributes.description)
    const [count, setCount] = useState(data.attributes.count)

    return (
        <div className='catalogs_item_page'>
            <div className='edit_container'>
                <label for="edit">Режим редактирования</label>
                <input type='button' id="edit" value={edit ? "Выключить" : "Включить"} onClick={() => setEdit(!edit)}/>
                {
                    edit ? (
                        <input type='button' id="save" value="Сохранить" onClick={() => updateCatalogsItem(data.id, {
                            "data": {
                              "name": name,
                              "description": description,
                              "count": count,
                            }
                        })}/>
                    ) : ""
                }
            </div>

            {
                edit ? (
                    <div className='catalogs__item'>
                        <div className='catalogs__item_left'>
                            <Image 
                                src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.attributes.images.data[0].attributes.url} 
                                width={600} 
                                height={600} 
                                alt={`${data.attributes.name}`}
                            />             
                        </div>

                        <div className='catalogs__item_right'>
                            <input type='text' name='name' placeholder='Название' className='catalogs__item_name' value={name} onChange={(e) => setName(e.target.value)}/>

                            <h3>Описание</h3>
                            <textarea name="description" placeholder='Описание' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                            <p className='count'>
                                Количество на складе: 
                                    <b>
                                        <input type='number' name='count' placeholder='Количество' className='catalogs__item_name' value={count} onChange={(e) => setCount(e.target.value)}/>
                                    </b>
                                шт.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className='catalogs__item'>
                        <div className='catalogs__item_left'>
                            <Image 
                                src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.attributes.images.data[0].attributes.url} 
                                width={600} 
                                height={600} 
                                alt={`${data.attributes.name}`}
                            />             
                        </div>

                        <div className='catalogs__item_right'>
                            <h2>{data.attributes.name}</h2>

                            <h3>Описание</h3>
                            <div className='description' dangerouslySetInnerHTML={{ __html: markdown.toHTML(data.attributes.description) }}></div>

                            <p className='count'>Количество на складе: <b>{data.attributes.count}</b> шт.</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}