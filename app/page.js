import Image from 'next/image'

async function getCatalogs() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/stock-master-catalogs?populate=images')
  return res.json()
}

export default async function Page() {
  const catalogs = await getCatalogs()

  return (
    <main>
      <div className='catalogs'>
        {catalogs.data.map(catalog => {
          return (
            <div className='catalog' key={catalog.id}>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + catalog.attributes.images.data[0].attributes.url} width={600} height={600} alt="test"/>

              <h2>{catalog.attributes.name}</h2>
            </div>
          )
        })}
      </div>
    </main>
  )
}
