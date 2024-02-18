const User = {
    name: "Rameesha",
    email: 'ram@gmail.com',
    isActive: false
}

const reactCourse = {
    name: 'React V1',
    isPaid: true,
    amount: 2000
}


// taking object arg , returning object , we wont write object , instead we use symbol for object that is {}
function createUser(User : {}): {}{
    return User;
}


createUser(User)

// return an object which should have always and always these defined properties

function createCourse(arg): { name: string , isPaid: boolean} {
    return {
        name: arg.name,
        isPaid : arg.isPaid
        // amount: arg.amount  // -> Cannot return any other attribute that is not defined but ref to line 32
    }
}

createCourse({name : "rameesha" , isPaid: false , amount : 3000}) 

createCourse(reactCourse) 

export {}