// ЗАДАНИЕ 2

const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

// console.log('jsonString', jsonString);

const data = JSON.parse(jsonString);
// console.log(data);

const list = data.list;
// console.log(list);

const result = {
  list: [
    {
      name: list[0].name,
      age: Number(list[0].age),
      profession: list[0].prof
    },
    {
      name: list[1].name,
      age: Number(list[1].age),
      profession: list[1].prof
    }
  ]
}

console.log('Result: ', result);