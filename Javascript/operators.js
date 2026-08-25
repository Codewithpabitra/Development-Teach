// +, - , * , / , % , **

console.log(12 + 3); // 15
console.log(12 - 3); // 9
console.log(12 * 3); // 36
console.log(12 % 3); // 0
console.log(2 ** 3); // 8 -> 2 ^ 3
console.log(10 ** 4); // 10 ^ 4 = 10000

// == -> comparison // only check value no type check
let value1 = "12";
let value2 = 12;
if (value1 == value2) {
  console.log("equal");
} else {
  console.log("not equal");
}

if (value1 === value2) {
  console.log("equal");
} else {
  console.log("not equal");
}

// ==== -> comparison , value and type both check
// = -> assignment
// > , <, >=, <= , != , !==

// logical -> && , ||, !

// ! , !=

// conditions
let age = 87;
// if (age >= 18) {
//   console.log("adult");
// } else {
//   console.log("young");
// }


// ternary operator
age >= 18 ? console.log("adult **") : console.log("young **")
// condiotion ? true action : false action