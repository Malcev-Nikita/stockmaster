import Image from 'next/image'

import AuthButton from './authButton'
import AuthNav from './authNav'

export default function Header() {
  return (
    <header>
        <a className='logo' href="/">
            <h1>StockMaster</h1>
        </a>

        <AuthNav/>

        <AuthButton/>
    </header>
  )
}
