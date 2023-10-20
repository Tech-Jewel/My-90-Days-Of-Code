//  FUNCTIONS
// Example 1:
function fruitProcessor(apples,oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// Example 2:

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2004);
console.log(age1);