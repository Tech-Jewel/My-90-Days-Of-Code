## Day 10 - 15 <br/>
# CONTROL FLOW
- Conditional statements like (if, if else, switch...case) and their uses
- Loops (while, for, do..while) and their uses
- Practice problems with conditionals and each loops.
- *NB: Practice examples are on the JS file.*

**Control statements are blocks of code that perform a specific operation based on conditions provided. The following are a few control statements in JavaScript.** <br/>

- ### if ... else

 **The "if" statement will execute a block of code when a required condition is satisfied. If accompanied by else block, it will execute another block of code when the condition is not satisfied.** <br/>

 - Syntax: <br/>
 if(condition){ <br/>
    Statement to be executed if condition is true✅ <br/>
  } else { <br/>
    Statement to be executed if condition is not true ❌ <br/>
  } <br/>
 <br/>

 - ### switch ... case

 **The "switch" statement is used  when several different conditions need to be evaluated. It checks for each case against the condition until a correct match is found. If no matches are found, the default condition will be executed.** <br/>

 - Syntax: <br/>
 `switch(condition){ <br/>
    case "condition 1" : <br/>
    statement to be executed; <br/>
    break; <br/>
<br/>
    case "condition 2" : <br/>
    statement to be executed; <br/>
    break; <br/>
<br/>
    case "condition (n)" : <br/>
    statement to be executed; <br/>
    break; <br/>
<br/>
    default: <br/>
    statement to be executed if no case condition matches; <br/>
    break; <br/>
 }` <br/>


- ### do ... while loop
**The "do...while" loop checks for the condition at the end of the loop. The "do" loop will be executed at least once, even if the condition is false.** <br/>

- Syntax: <br/>
do{ <br/>
  statements to be executed; <br/>
} while (condition); <br/>
<br/>

- ### while loop
**The "while" loop executes a statement or a block of code repeatedly as long as the condition is true. When condition is false, the loop will exit.** <br/>

- Syntax: <br/>
while(condition){ <br/>
  statements to be executed if condition is true; <br/>
} <br/>
<br/>  

- ### for loop
The "for" loop is used to execute a block of code multiple times for a specific condition. It has three parts: <br/>
  1. The loop initialization <br/>
  2. If the condition is true or not. If the condition is true, then the code given inside the loop will be executed otherwise the loop will exit. <br/>
  3. The iteration statement that can increase or decrease the counter. <br/>
  <br/>
- Syntax: <br/>
`for(initialization; condition; iteration statement; ){ <br/>
  statements to be executed if test condition is true; <br/>
}` <br/>
<br/>
