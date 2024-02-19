interface  cred {
    readonly dbId: number,
    email: string,
    password: string,
    googleLogin ? : string,
    myFunc() : string,
}

// it is allowed in typescript , it is being called reopening of the interface
interface cred {
    authToken : string
}

const myCred: cred = {dbId: 233 , email: "3@gmail.com" , password: "abc123" , myFunc : ()=> {
    return " heello "
} , authToken: "35eof4rfkczlkeddgf"}


interface Admin extends cred // we can write as many interface to extend here
{
    role : "admin" | "ta" | "associate"
}

export {}