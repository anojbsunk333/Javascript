let p = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        alert("i am promise and i am rejected")
        // console.log("Promise resolved successfully")
        // resolve(true)
        reject(new Error("I am an error"))
    }, 2000)
})
console.log(p)