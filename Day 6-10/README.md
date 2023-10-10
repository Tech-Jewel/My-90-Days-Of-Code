# Day 6 - 10

## VARIABLES AND THEIR DECLARATION
Value is the smallest unit of information that we have in JavaScript. <br/>
We can store our values in variables so we can use them over and over again. <br/>


### Conventions and rules for naming variables. <br/>
- camelCasing is the best form of casing when naming a variable. e.g "**myFirstName**"
- We cannot start variable names with numbers.
- A variable name can only contain numbers, letters, underscore(_) and dollar($) sign.
- We cannot name a variable with a reserved keyword like function, array etc.
- Do not start a variable name with an uppercase letter. Variables written in uppercasing are constant values like **PI**.
- It is a good practice to have as little variable changes as possible because change in variable could cause errors in code.
- Variables with numbers as their data type should not be placed in quotation marks.
- Make sure your variable names are descriptive. e.g 
 `let myFirstJob = "teacher"` is better and easier to understand than `let job = "teacher";`

## Let, var and const keywords

We can declare variables with JavaScript using the "**let**" , "**var**"  or "**const**" keywords. <br/>
N.B: - We can reassign or mutate variables(change its values). <br/>

### Examples:
 `let name = "Jewel";` - "let" <br/>
 `var age = 20;`- "var" <br/>
 `const PI = 3.142;` - "const" <br/>

- We use the "let" keyword to declare rlues that can be changed later.
- Do NOT use "var" keywords to declare variables FOR NOW.**
- **Let is blocks code and var is functions code.**
- We use the "const" keyword to declare variables that can have constant values throughout the code. It cannot be re-declared or re-assigned. <br/>
We cannot declare empty const variables.

## Data Types
Every value is either an 
- **OBJECT** <br/>
let me = { <br/>
    name: "Jonas" <br/>
}; <br/>
or <br/>
- **PRIMITIVE**
`let firstName = "Grace";` <br/>

 #### THE SEVEN PRIMITIVE DATA TYPES
1. String: Words written in quote (could be single'' or double"") e.g `"JavaScript"`
2. Number: Whole numbers and decimals e.g. 16, 9.5 etc.
3. Boolean - returns two values (True or false) - used for taking decisions.
4. Undefined -  A variable that has been declared but is not yet defined (empty value).
5. Null - A variable that has no value.
6. Symbol:  Value that is unique and cannot be changed.
7. BigInt: Larger integers than the number type can hold. <br/>

- **JavaScript has dynamic typing. Value has data type, NOT the variable!** <br/>

#### How to know the data type of a Value

- `console.log{typeof "value"}` <br/>



## STRING WITH TEMPLATE LITERALS
- We can concatenate strings - print strings in different variabes together to the console. <br/>

We can do that through two ways: <br/>
 

 `const templateLiteral1 = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!" ` <br/>
               OR
`const templateLiteral2 = `I'm ${firstname} and I am a ${job}`; `

- The second method is mostly used in ES6 as it is easier and less stressful. We can also create multiline strings.

## OPERATOR AND ITS PRECEDENCE
**An operator allows us to transform values or combine multiple values.**
**There are different types of operators like:** 
- Mathematical/arithmetic operators ( + , - , * , / , % , ** )
- Comparison operators ( > , < , >= , <= )
- Logical operators
- Assignment operators (==), etc.

