/*let arr = [1, 2, 5, 7 , 8]
    let newArr = arr.map((e)=> {

    return e**2
    })
    console.log(newArr)*/


    /*let arr = [4, 9, 1, 3, 7, 5]
    let newArr = arr.map((e)=> {
        return e + + 5
    });
    console.log(newArr)*/

/*
    const arr = [
        {
            name:'anpj',
            age: 22
        },
          {
            name:'anpj',
            age: 22
        },
          {
            name:'anpj',
            age: 22
        },
          {
            name:'anpj',
            age: 22
        },
    ]


    console.table(arr)

    const amrit = [{
        class:12,
        rollno: 4
    },
    {
        address: "baglung",
        age: 21
    }

        
    ];
     console.table(amrit);
     console.error(amrit);
     */


    //  let ar = ["andy", "surendra", "amrit","risab"]
    let anoj = [2, 4, 5, 9 , 12, 15, 18]
     let newAnoj = anoj.map((e)=> {
        return e - - 1
     })
        console.table(newAnoj)

        const greaterThanSeven =(e)=>{
            if(e>7){
                return true 
            }
            return false
        }

        console.log(newAnoj.filter(greaterThanSeven)) 
    