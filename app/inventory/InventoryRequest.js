

async function Request(JWT) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/inventories`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWT}`,
        },
    })
        
    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()
}

export default function InventoryRequest() {
    const inventoryRequest = Request(localStorage.getItem('User_JWT'))
    // console.log(inventoryRequest)

    return (
        <div className="report_list">
            {inventoryRequest.data.map(report => (
                <div>{console.log(report)}</div>
            ))}
        </div>
    );
}