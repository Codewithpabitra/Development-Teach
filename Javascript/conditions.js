// age = prompt("Enter your age cutiie");

// if(age >=18) {
//     console.log("adult");
// }else {
//     console.log("young");
// }


price = 30

if(price > 10 && price < 30) {
    console.log("price is between 10 and 30");
}else if(price < 10 || price > 30) {
    console.log("price is less than 10 or greater than 30");
}else {
    console.log("price is 10 or 30");
}

// swich case 
switch (price) {
    case 10:
        console.log("price is 10");
        break;
    case 30:
        console.log("price is 30");
        break;
    default:
        console.log("price is neither 10 nor 30");
}