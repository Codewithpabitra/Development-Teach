var name = "Pabitra";

console.log(name);

let fullName = "Arundhuti Jana";

console.log(fullName);
// camel case -> arundhutiJana
// snake case -> arundhuti_jana

{
  var name = "bdhnfbdf";
}

var price2 = 12.56;
{
  let price = 34.89;
  console.log(price);
  price2 = 41.78;
}

price = 45.78;
console.log(price);
console.log(price2);

const isIntelligent = true;
// isIntelligent = false; // error
console.log(isIntelligent);

// JS problem
let country = "India"; // string
country = true; // boolean

// typescript -> language -> type safety

// int a = 21; // cpp, c variables

// datatypes
// String
let schoolName = "XYZ";

// boolean
const isSunHot = true;

// NUmber
let numberOfBanana = 21;
let priceOfCHai = 50.45;

console.log(typeof schoolName);
console.log(typeof isSunHot);
console.log(typeof numberOfBanana);
console.log(typeof priceOfCHai);

// undefined
let randomVal;
console.log(randomVal);
console.log(typeof randomVal);

// null
let isNullVal = null;
console.log(isNullVal);
console.log(typeof isNullVal); // object

// object
let randomObj = {
  // key : value
  name: "ARU",
  age: 21,
  isLoggedIn: true,
  field: "fileds",
};

console.log(randomObj);
console.log(randomObj.name);
console.log(randomObj.age);
console.log(randomObj.isLoggedIn);

console.log(randomObj["name"]);
console.log(randomObj["field"]);

console.log(typeof randomObj);

// Array
let fruits = ["Banana", "apple", "cherry", true, 12, 78.9];
console.log(fruits[fruits.length - 1]);

console.log(typeof fruits); // object

// symbol -> unique
let value1 = Symbol(1);
console.log(value1);
console.log(typeof value1);


// bigint
let value2 = 12n;
console.log(value2);
console.log(typeof value2);
