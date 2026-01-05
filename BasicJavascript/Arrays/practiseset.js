// qsn1

// Create an array of numbers and take input from the user to add numbers to this array. 
/*let arr = [1, 2, 3, 4, 5, 6]
let a = prompt("Enter the new value")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)*/


// Qsn2

// keep adding numbers to the array in qsn1 until 0 is added to the array. 

/*let arr = [1, 2, 3, 4, 5, 6, 7]
let a;

do {
    a = prompt("Enter the value")
    a = Number.parseInt(a)
    arr.push(a)
} while(a != 0);
console.log(arr)*/

// qsn3

// filter for numbers divisible by 10 from a given Array. 

/*let arr = [2, 5, 10, 15, 27, 31, 40]
 let a = arr.filter((x)=>{
    return x % 10 == 0
})
console.log(a)*/

/*let arr = [2,3,4,5,6,7,8,9,10]
let a = arr.filter((x)=>{
    return x % 3 == 0
})
console.log(a)*/


// qsn4

// create an array of square of given numbers 

/*let arr = [1, 2, 3, 4, 5]
let a = arr.map((e)=>{
    return e**2
})
console.log(a)*/


/*let arr = [2,3,4,5,6,7,8,9,]
let a = arr.map((e)=>{
    return e**3
})
console.log(a)*/

// qsn5
// Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated)


let arr = [4, 5, 6]
let a = arr.reduce((x1, x2)=>{
    return x1 * x2
})
console.log(a)