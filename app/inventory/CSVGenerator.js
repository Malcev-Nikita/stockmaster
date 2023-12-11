'use server'


async function SendReport(JWT, LINK) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/inventories`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`,
      },
      body: JSON.stringify({
        data: {
          link_to_report: LINK
        },
      }),
    })
  } catch (error) {
    console.log(error);
  }
}

export default async function CSVGenerator(decodedResults, JWT) {
  const date = new Date();
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const csvHeaders = [
    {id: 'slug', title: 'Name'},
    {id: 'count', title: 'Count'},
  ];

  let data = [];

  for (const element of decodedResults) {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stock-master-catalogs?filters[slug][$eq]=${element.decodedText}`);
      
      data.push({
        slug: response.data.data[0].attributes.slug,
        count: response.data.data[0].attributes.count
      });
    } catch (error) {
      console.log(error);
    }
  }

  const csvFileName = `report_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.csv`;
  const csvFilePath = `public/reports/${csvFileName}`;
  const csvWriter = createCsvWriter({
    path: csvFilePath, 
    header: csvHeaders,
    fieldDelimiter: ';',
  });

  csvWriter.writeRecords(data);

  SendReport(JWT, `/report/${csvFileName}`);
}