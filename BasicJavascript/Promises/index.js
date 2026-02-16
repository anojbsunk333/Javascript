const prompt = require("prompt-sync")();

let promise = new Promise(function(resolve, reject){
    alert(" i am an alert in promise")
    resolve(56)

})



console.log("hello")
setTimeout(function(){
    console.log("hello two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")