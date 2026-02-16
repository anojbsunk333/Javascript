// Create a promise which rejects after 3 seconds. use an async/await to get its value. use a try catch to handle its error.


let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject(new Error("Please this is not acceptable"))
        }, 3000)
    })
}

let a = async () => {
    try {
        let c = await p()
        console.log(c)

    }
    catch(err) {
        console.log("this error has been handled")
    }
}
a()