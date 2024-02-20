function One (arg : number) : number {
    return arg
}

//generic type , whenever it will receive the arg acc to that type it will lock that type 
function Two<T> (val : T) : T {
    return val
}


const two  = Two(0)


function showType<T extends MyType>(arg: T): string {
    return arg.name;
}

const e = showType({ name: "ram", email: "lfksdl" });

console.log(e);

// function having a generic type , taking geenric type array and return generic type value from the argumented array 

function getSearchProducts <T> (products: T[]): T {
    //do some operations
    const myIndex = 3
    return products[myIndex]
}

// geenric syntax in arrow function 

// <T,> not a jsx syntax but a generic type -> common practice

const getProducts = <T,>(products: T[]): T =>{
    return products[0] // returning product value in 0'th place of type T (generic)
}

const value = getProducts(["fgh0","fthf","tht"])

console.log(value)

function myFunction<T, U>(valueOne : T , valueTwo : U): {}  {
    return {
        valueOne,
        valueTwo
    }
}


const value2 = myFunction(true,"kl")

type MyType  = {
    name: string;
    email: string;
};

function myFunction2<T, U extends MyType>(valueOne: T, valueTwo: U): {} {
      return {
        valueOne,
        name: `${valueTwo.name}, ${valueTwo.email}`, 
    }
  }
  
  const value3 = myFunction2(6, { name: "ema", email: "e@gmail.com" });
  console.log(value3);

  export{}
  