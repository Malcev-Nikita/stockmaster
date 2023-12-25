// export const getAllReports = async (JWT) => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/inventories`, { 
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${JWT}`,
//         },
//     })
  
//     if (!res.ok) throw new Error("Unable to fetch posts.");
  
//     return res.json();
// };