/*The Continue Statement
The continue statement skips the current iteration in a loop.

The remaining code in the iteration is skipped and processing moves to the next iteration.*/

Example
//Skip the value of 3:

for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
