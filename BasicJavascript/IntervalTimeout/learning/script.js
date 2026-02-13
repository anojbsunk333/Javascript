alert("Heyy Broo");

let a = setTimeout(function () {
  alert("Can i get your access?");
}, 5000);



let b = prompt("Do you want to run the setTimeout?")
if ("no" == b) {
    clearTimeout(a);
}
// setInterval(function () {
//   alert("Re Doing the process");
// }, 5000);

// clearTimeout(a)   //if you want to stop the timeout then you can use clearTimeout() function and then pass the variable which is storing the timeout in it.
console.log(a);



