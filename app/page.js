import Image from 'next/image'

async function getData() {
  const res = await fetch('https://api.example.com/...')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home() {
  return (
    <main>
      
    </main>
  )
}
