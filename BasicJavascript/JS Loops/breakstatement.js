/*The Break Statement
The break statement "jumps out" of loops and switches.

The break statement terminates the execution of a loop or a switch statement.*/

Example
//Terminate the loop (break the loop) when the loop counter (i) is 3:

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}