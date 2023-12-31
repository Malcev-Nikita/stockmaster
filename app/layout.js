import './css/main.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StockMaster',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header/>

        <main> {children} </main>
        
        <Footer/>
      </body>
    </html>
  )
}
