'use client'

import axios from 'axios';


async function getCatalogs() {
    let res = ''

    axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs`)
        .then((response) => {
            // console.log(response.data)
            res = response.data;
        })
        .catch((error) => {
            res = error;
        });

    return res.json();
}

export default async function Page() {
    const catalogs = await getCatalogs();
    console.log(catalogs)

    return (
        <div className="inventory">
            {
                // catalogs.map(item => (
                //     <div>
                //         <h3>{item.id}</h3>
                //     </div>
                // ))
            }
        </div>
    );
};