"use client"

import React, { useState } from 'react';

export default function EditComponent() {
    const [edit, setEdit] = useState(false);

    return (
        <div className='edit_container'>
            <label for="edit">Режим редактирования</label>
            <input type='button' id="edit" value={edit ? "Выключить" : "Включить"} onClick={() => setEdit(!edit)}/>
        </div>
    )
}