import EditComponent from './edit';


async function getData(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?filters[slug][$eqi]=${slug}&populate=*`, { cache: 'no-store' })
   
    if (!res.ok) throw new Error('Failed to fetch data')
   
    return res.json()
}


export default async function Page({params}) {
    const data = await getData(params.slug)
    
    return (
        <EditComponent data={data.data[0]}/>
    )
}
