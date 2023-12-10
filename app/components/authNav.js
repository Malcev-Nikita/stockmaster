"use client"

export default function AuthNav() {
    try {
        if(localStorage.getItem('User_JWT') !== null) {
            const data = JSON.parse(localStorage.getItem('User_Data'))
            
            return (
                <nav className='menu'>
                    <ul>
                        <a href="/"><li>Каталог</li></a>
                        <a href="/inventory"><li>Провести инвентаризацию</li></a>
                    </ul>
                </nav>
            )
        }
        else {
            return (
                <nav className='menu'>
                    <ul>
                        <a href="/"><li>Каталог</li></a>
                    </ul>
                </nav>
            )
        }  
    } catch (error) {
        return error;
    }
}
