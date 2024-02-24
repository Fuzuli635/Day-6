let persons = [
  { name: "Fuzuli", age: 29 },
  { name: "Anar", age: 25 },
  { name: "Elmira", age: 20 },
  { name: "Nergiz", age: 21 },
  { name: "Yaver", age: 22 },
  { name: "Metin", age: 18 },
  { name: "Ismayil", age: 19 },
];
let personFind = persons.find((student) => student.age == 20 && student.name == "Elmira");
console.log(personFind);

// let newNum = [123, 222, 333, 444];

// let isExist = arr.includes("Fuzuli1");
// let index = arr.indexOf("Fuzuli1");
// console.log(isExist);
// console.log(index !== -1);
