import Image from 'next/image'

async function getContents() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/catalogs')
  return res.json()
}

export default async function Page() {
  const data = await getContents()

  return (
    <main>
      <div className='catalogs'>
        {
          data.map
        }
      </div>

      {console.log(data)}
    </main>
  )
}
