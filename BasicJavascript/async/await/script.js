async function anoj (){
    let kathmanduWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("29 deg")
        }, 1000)
    }) 

    let pokharaWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("23 deg")
        }, 2000)
    })
    // kathmanduWeather.then(alert)
    // pokharaWeather.then(alert)

    console.log()
    let kathmanduW = await kathmanduWeather
    let pokharaW = await pokharaWeather
    return [kathmanduW, pokharaW]
}

console.log("Welcome to weather control room")
let a = anoj()
console.log(a)