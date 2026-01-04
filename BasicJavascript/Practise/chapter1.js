// // chapter 1


// //QSN1
// // Create a variable type of string and try to add a number to it.

let a = "Anoj"
let b = 25;

 console.log(a + b)


// // QSN 2
// // Use a type of operator to find the datatype  of the string in last question
  
console.log(typeof a, typeof b)



// //QSN 3
// // Create a const object in javascript can you change it to hold a number later. 

const x = {
    name: "Anoj",
    age: 23,
    isPrincipal: True

}
x = 25           //error


// // QSN 4

// // Try to add a new key to const object in problem 3 were you able to do it?

x['brother'] = "surendra"      /* [KEY ADDED]*/



console.log(a)



// QSN 5
// Write a js program to create a word -meaning dictionary of 5 words 

const dict = {
    appreciate: "recognize the full worth of.",
    aphorism: "a short saying or observation that's witty or wise",
    capoeira: "a dance form incorporating martial arts elements, originating in Brazil as a system of physical discipline and movement.",
    breakcore: "a type of electronic dance music, usually characterized by a high tempo and samples from diverse sources.",
    decimate: "to kill or destroy a great number or proportion of.",
}
console.log(dict.aphorism)  /*or console.log(dict['aphorism'])*/