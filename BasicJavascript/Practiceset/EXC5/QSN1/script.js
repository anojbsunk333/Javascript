
// QSN1: Create a javascript class to create a complex number. Create a constructor to set the real and the complex part

class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

//   QSN2: Write a method to add two complex numbers in the above class
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
    
  }
  // QSN5: 
  get real(){
    return this._real
  }
  get imaginary(){
    return this._imaginary
  }
  set imaginary(newImaginary){
    this._imaginary = newImaginary
  }
  set real(newReal){
    this._real = newReal
  }
}

let a = new Complex(2, 4)
a.real = 10
a.imaginary = 10
let b = new Complex(6, 2)
a.add(b)
console.log(a.real, a.imaginary)
// console.log(`${a.real}+${a.imaginary}i`) (Fancy way to write code)

// QSN3: Create a class student from a class human override a method and see changes

// class Human{
//     constructor(name, favlanguage){
//         this.name = name
//         this.favlanguage = favlanguage
//     }
//     walk(){
//         console.log(this.name + "Human is walking")
//     }
// }

// class student extends Human{
//     walk(){
//         console.log(this.name + ": Student is walking")
//     }

// }

// let o = new student("Anoj", "Javascript")
// o.walk()

// QSN4: See if student is an instance of human using instance keyword
// console.log(o instanceof Human)

