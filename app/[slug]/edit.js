"use client"

import React, { useState } from 'react';
import {markdown} from 'markdown';
import Image from 'next/image'

export default function EditComponent({data}) {
    const [edit, setEdit] = useState(false);

    return (
        <div className='catalogs_item_page'>
            <div className='edit_container'>
                <label for="edit">Режим редактирования</label>
                <input type='button' id="edit" value={edit ? "Выключить" : "Включить"} onClick={() => setEdit(!edit)}/>
            </div>

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

                    <p className='count'>Количество на складе: {data.attributes.count} шт.</p>
                </div>
            </div>
        </div>
    )
}