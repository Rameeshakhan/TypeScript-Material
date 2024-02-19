//  Type Aliases is like creaitng a type of your own and pass that type are arg or whatever
 type User = {
    name : string;
    email : string ;
    isActive : boolean 
 }

 function getUser (user : User ): User {
    return user
 }

 getUser({name: "John" , email: 'john@gmail.com' , isActive : true})

 export {}

 // You dont have to type all the args one by one inside the fucntion to pass. Just create a type object and pass that.

//  type Obj = {
//     readonly _id : string // readonly is a keyword that makes its un-changable
//     name : string
//     email : string 
//     isActive : boolean 
//  }

// if passes an array to readonly, then push and pop is allowed

 type Obj = {
    readonly _id : string [] // readonly is a keyword that makes its un-changable
    name : string
    email : string 
    isActive : boolean 
 }

 let myObj: Obj ={
    _id : ['dfgf'],
    name : 'e',
    email : 'e@email.com' ,
    isActive : false 
 }

myObj.email = 'email@email.com'
myObj._id.push('dhdgh')
myObj._id.pop()

console.log(myObj)
//  myObj._id = '3434' // wont be possible

type Address = {
    street: string;
    city: string;
};

type Obj1 = {
    readonly _id: readonly string[];
    name: string;
    email: string;
    isActive: boolean;
    address: Address; // Assigning an object type
};

// Example usage:
const myObject: Obj1 = {
    _id: ['1', '2', '3'],
    name: 'John',
    email: 'john@example.com',
    isActive: true,
    address: {
        street: '123 Main St',
        city: 'Example City',
    },
};

// This would be valid:
myObject.name = 'New Name';

// This would be invalid:
// myObject._id = ['4', '5', '6']; // Cannot reassign a new array to a readonly property


// if you want to have a property that someone can have and someone cannot so we be doing like this 

type paymentInfo = {
    readonly _customerId : string
    amount : number
    creditCardNumber? : number // question mark syntax will make it an optional attribute
}

let myPaymentInfo: paymentInfo = {
    _customerId : '1232',
    amount : 4000
}


type cardNumber = {
    cardnumber: string
}

type cardDate  = {
    cardDate: string
}

// defining a new type based on the combination of diff types
// not a good practice
type cardDetails = cardNumber & cardDate & {
   cvv : number
}
