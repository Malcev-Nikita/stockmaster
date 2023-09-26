'use client'

import { AiOutlineArrowUp } from 'react-icons/ai'

function Up() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

export default function ArrowUp() {
  return (
    <button className='arrow_up' onClick={Up}>
        <AiOutlineArrowUp/>
    </button>
    )
}
