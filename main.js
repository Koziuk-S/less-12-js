// One line comment

/*
  Block comment
*/

// var, let, const
// var
// console.log(userName); // undefined

// var userName = "Serhiy";

// console.log(userName); // Serhiy

// userName = "Nik";

// console.log(userName); // Nik

// var userAge = 10;
// var userAge = 18;

// console.log(userAge);

// let
// let userName = "Serhiy";

// console.log(userName); //

// userName = "Nik";

// console.log(userName); //

// let userAge = 10;
// let userAge = 18;

// console.log(userAge);

// const
// const userName = "123";
// userName = "345";

// let a = {}; // Object

// {
//   var a = 10;
// }

// if (true) {
//   var b = 15;
// }

// console.log(b); // 10

// let, const

// {
//   let a = 10;
// }

// // console.log(a);

// if (true) {
//   const b = 15;
// }

// console.log(b); // 10

// let userSerhiy = {
//   name: "Serhiy",
//   age: 18,
//   isAdmin: true,
// };

// console.log(userSerhiy.isAdmin);

// let arrNumbers = [
//   12,
//   {
//     name: "I am Array ",
//   },
// ];

// console.log(arrNumbers[0]);
// console.log(arrNumbers[1].name);

// let a = 10;
// let b = a;

// a = a + 5;

// console.log("a", a);

// console.log("b", b);

// let arrA = [1, 2, 3];
// let arrB = arrA;

// arrA.push(4);

// arrB.push(9);

// console.log("arrA", arrA);

// console.log("arrB", arrB);

// let a = 12;
// let b = "some string";

// let c = a + b;

// let strNumber = "42";
// let num = Number(strNumber);

// let boolValue = false;
// let strBool = String(boolValue);
// console.log(strBool);

// let trasOne = "100";
// let balance = "1.78";

// let newBalance = parseFloat(balance);

// console.log(newBalance);

// let trasOne = "100";
// let balance = 1.78;

// console.log(typeof trasOne);

// if (typeof trasOne == "string") {
//   trasOne = Number(trasOne);
// }

// let newBalance = balance + trasOne;

// console.log(newBalance);

-1; // true
1; // true
0; // false
[]; // true
{
} // true
(""); // false
(" "); // true
undefined; // false
null; // false
NaN; //false
// console.log(Boolean(NaN));

let a = [123];
let b = [123];

console.log({} === {});
