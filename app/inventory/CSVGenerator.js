'use server'

import createCsvWriter from 'csv-writer';

export default async function CSVGenerator() {
  console.log(1)
  // Генерация данных для CSV
  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'San Francisco' },
    { name: 'Bob', age: 35, city: 'Los Angeles' },
  ];

  // Подготовка CSV-заголовков
  const csvHeaders = [
    { id: 'name', title: 'Name' },
    { id: 'age', title: 'Age' },
    { id: 'city', title: 'City' },
  ];

  // Создание объекта CSV-писателя
  const csvWriter = await createCsvWriter({
    path: 'public/data.csv', // Путь к файлу CSV
    header: csvHeaders,
  });

  // Запись данных в CSV-файл
  await csvWriter.writeRecords(data);
}