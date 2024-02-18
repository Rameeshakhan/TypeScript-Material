
function addTwo(num: number): number{ // will give error if any other data type argument is passed
    return num + 2; //if returning any other typw will throw error
}

// In this it can be happen that you use num to use any builtin function for any types
// function addTwo(num){
//     num.toUpperCase() //should not be possibe right ?
//     return num + 2;
// }

console.log(addTwo(4));

function getUpper(value: string){
    return value.toUpperCase()
}

console.log(getUpper('world'));

function signUpUser(name: string, email: string, password: string){ }

console.log(signUpUser('world','world','world'));

//giving default value 
function loginUser(name: string, email: string , isPaid: boolean = false){}

console.log(loginUser('world','world'));

export {}

//this could happen 

// function getValue(value:  number){
//     if(value > 5){
//         return true
//     }
//     return '200 ok'
// }
// union return type

function getValue(value: number): boolean | string {
    if (value > 5) {
        return true;
    }
    return '200 ok';
}

// types writing syntax in arrow function

const getHello = (arg: string):string => {
    return `hello ${arg}`
}

getHello('adsdf')

// TypeScript automatically detect the types

const heros = ['SpiderMan' , 'SuperMan' , 'BatMan'];
// const heros = [1 , 2 ,3];


heros.map((hero): string => {
    // return 2; // will give error with the return type
    return `hero is ${hero}`;
})

// void to use where a function wont return anything

function consoleError(errMsg: string) : void {
    console.log(errMsg)
}

// never that will never return anything

function handleError (errMsg: string): never {
    throw new Error (errMsg)
} 

// Use void when a function does not return any value.
// Use never when a function never produces a value, either because it throws an exception or enters an infinite loop.

