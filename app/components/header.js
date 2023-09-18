import Image from 'next/image'

export default function Header() {
  return (
    <header>
        <a className='logo' href="/">
            <h1>StockMaster</h1>
        </a>

        <nav className='menu'>
            <ul>
                <a href="/"><li>Каталог</li></a>
                <a href="#"><li>Добавить товар</li></a>
                <a href="/inventory"><li>Провести инвентаризацию</li></a>
            </ul>
        </nav>

        <div className='auth'>
            <a href='/auth'>Авторизация</a>
        </div>
    </header>
  )
}
