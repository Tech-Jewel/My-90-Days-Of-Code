// Declaring variables

// let
let programmingLanguage = "JavaScript";
console.log(programmingLanguage);

// var
var myHobby = "coding";
console.log(myHobby);

// const
const PI = 3.142;
console.log(PI);

// How to know different data types
console.log(typeof "string");
console.log(typeof 12);
console.log(typeof true);


// Use of template literals
const myFirstName = "Jewel";
const myLastName = "Abimbola";
const currentYear = 2023;
const myBirthYear = 2000;


console.log(`I'm ${myFirstName} ${myLastName} and I am ${currentYear - myBirthYear} years old.`);

// Operator and its precedence

const now= 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageSarah * 2, ageJonas / 10, 2 ** 3);

// MATHEMATICAL/ARITHMETIC OPERATORS
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x= x * 4 = 100
x++; // x + 1 = 101
x--; // 
console.log(x);

// COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 25);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);