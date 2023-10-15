// Practice Examples

// If...else statements
const avgDolphins = (97 + 112 + 80) / 3;
const avgKoalas = (109 + 95 + 50 ) / 3;
console.log(avgDolphins , avgKoalas);
console.log( avgDolphins > avgKoalas, avgDolphins < avgKoalas , avgDolphins === avgKoalas );

const minScore = 100;
if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
    console.log("Dolphins are the winner!!!");
} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
    console.log("Koalas are the winner!!!");
} else if (avgKoalas === avgDolphins >= 100) {
    console.log("Both wins the trophy.");
} else {
    console.log("No team wins the trophy!!!");
}

// Switch...case
const day = "Thursday";

switch(day) {
    case "Monday": // day === Monday
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;

    case "Tuesday" : // day === Tuesday
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code examples");
        break;
    case "Friday":
        console.log("Record Videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

// do...while loops
let i = 1;
 do {
    console.log(i);
    i++
 } while (i <= 10);


//  while loop
let b=16;
    while (b < 45) {
    console.log(b);
    b+=2;
 }
 

//  for loop
for (let b=50; b >= 30; b-=2){
    console.log(b);
 }

