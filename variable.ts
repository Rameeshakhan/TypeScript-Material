let greetings: string = 'Hello world' ;
greetings.toLowerCase()
console.log(greetings)

// number

let userId: number = 334455;
userId.toPrecision()
console.log(userId)

// best practice
    // Type Script is smart enough to detect the type 

    // let userId = 334455;
    // userId.toPrecision()
    // console.log(userId)

//boolean 

let isLoggedIn: boolean = false
console.log(isLoggedIn)

// Any Keyword

// when working with teams and other developers is going to use the variables that you are making it could be problem so in these type of scenarios use the explicit data type defining. like 
// let hero: any;

// any keyowrd is not a data type , its just a pointer to point out that hey i dont wanna check the type of variable. 


let hero;

function getHero(){
    return 'Captain America';
}

hero = getHero()


export{}