'use client'

import { AiOutlineArrowUp } from 'react-icons/ai'
import React, { useEffect } from 'react';

function Up() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

function Scroll() {
    if(self.pageYOffset > 300) {
        document.querySelector('.arrow_up').classList.add('active')
    }
    else {
        document.querySelector('.arrow_up').classList.remove('active')
    }
}

export default function ArrowUp() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(self.pageYOffset > 300) {
                document.querySelector('.arrow_up').classList.add('active')
            }
            else {
                document.querySelector('.arrow_up').classList.remove('active')
            }
        }
        );
    }, []);

  return (
    <button className='arrow_up' onClick={Up} onScroll={Scroll}>
        <AiOutlineArrowUp/>
    </button>
    )
}
