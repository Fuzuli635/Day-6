let persons = [
  { name: "Fuzuli", age: 29 },
  { name: "Anar", age: 25 },
  { name: "Elmira", age: 20 },
  { name: "Nergiz", age: 21 },
  { name: "Yaver", age: 22 },
  { name: "Metin", age: 18 },
  { name: "Ismayil", age: 19 },
];

let str = "fuzuli";
let obj = {
  f: 1,
  u: 2,
  z: 1,
  l: 1,
  i: 1
}
let newArr = str.split("");
let letterCount = newArr.reduce((obj, letter) => {
  if (obj[letter]) {
    obj[letter] += 1;
  }
  obj[letter] = 1;
  return obj;
},{})
console.log(obj);
// let num1 = [1, 2, 3, 4];
// let num2 = [1, 2, 3, 4];

// console.log(num1.toString() === num2.toString());
// let students = persons.filter((student) => student.age > 20);
// console.log(students);

// let num = [1, 2, 3, 4, 5];
// let newNum = num.join("--");
// console.log(num,newNum);
// let students = persons.join("------")
// let students = persons.sort((a, b) => a.age - b.age);
// console.log(students);
// let students = persons.map((student) => {
//   if (student.age > 20) {
//     let newGroup = { ...student };
//     newGroup.group = "JSA5";
//     return newGroup;
//   }
//   return student;
// });
// console.log(students);
// let studentGroup = persons.filter((student) => student.age > 20);

// console.log(studentGroup);
// let findPerson = persons.find((student, index) => {
//   console.log(index);
//   return student.age === 21 && student.name === "Nergiz";
// });
// console.log(findPerson);
// let newNum = [123, 222, 333, 444];

// let isExist = arr.includes("Fuzuli1");
// let index = arr.indexOf("Fuzuli1");
// console.log(isExist);
// console.log(index !== -1);
