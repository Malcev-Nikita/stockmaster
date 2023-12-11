'use server'
import axios from 'axios';

async function SendReport(JWT, link, dateStart) {
  try {
    await axios({
      method: 'post',
      url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/inventories`,
      data: {
        link: link,
        date_start: dateStart
      },
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    });
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

  console.log(JWT)
  console.log(`/report/${csvFileName}`)
  console.log(date)
  // SendReport(JWT, `/report/${csvFileName}`, date);
}