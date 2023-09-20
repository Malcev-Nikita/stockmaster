import Catalog from './catalog';


async function getCatalogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?populate=*`, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}


export default async function Page() {
  const catalogs = await getCatalogs()

  return <Catalog catalogs={catalogs}/>
}