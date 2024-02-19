// if you are not sure about type then instead of using any use union operator

 let score: number | string = 55

 score = 44 ;

 score = '55';

//  Example Scenario

type User = {
    name : string
    id: number
}

type Admin = {
    username : string
    id: number
}

let exampleUser : User | Admin = {name: "example" , id: 333}

exampleUser= {username: "ex", id: 333}


// function getDbId(id: string | number){
//         id.toLowerCase() // this line will give error because it is not sure if it is of what type
// }


function getDbId(id: string | number){
    if(typeof id === 'string'){
        id.toLowerCase()
    }
    else {
        id +2
    }
}

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]

const data3: (string | number) [] = [1,4,'6']

// when we have to define values 

let seatAllotment : 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'

// seatAllotment = 'crew' // not allowed

