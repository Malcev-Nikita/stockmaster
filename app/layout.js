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
      <link href="/app/css/main.css" rel="stylesheet"/>
      
      <body className={inter.className}>
        <Header/>

        {children}
        
        <Footer/>
      </body>
    </html>
  )
}
