## Day 6 - 10

## VARIABLES AND THEIR DECLARATION
Value is the smallest unit of information that we have in JavaScript.
We can store our values in variables so we can use them over and over again.

We use the "const" keyword to declare values that canhave constant values throughout the code. It cannot be mutated.
We cannot declare empty const variables.
**Let is blocks code and var is functions code.**
For now, never use "var".
Conventions and rules for naming variables.
- camelCasing is the best form of casing when naming a variable. e.g "**myFirstName**"
- We cannot start variable names with numbers.
- A variable name can only contain numbers, letters, underscore(_) and dollar($) sign.
- We cannot name a variable with a reserved keyword like function, array etc.
- Do not start a variable name with an uppercase letter. Variables written in uppercasing are constant values like **PI**.
- It is a good practice to have as little variable changes as possible because change in variable could cause errors in code.
- Make sure your variable names are descriptive. e.g 
- `let myFirstJob = "teacher"` is better and easier to understand than `let job = "teacher";`

## Let, var and const keywords

We can declare variables with JavaScript using the "**let**" , "**var**"  or "**const**" keywords.

- We use the "let" keyoword to declare values that can be changed later.
- We can reassign or mutate variables(change its values).
- Do NOT use "var" keywords to declare variables for now.
- const variables are variables with permanent values. It cannot be re-declared or re-assigned.
Examples:
`let name = "Jewel";`
`var age = 20;`
`const pi = 3.14;`