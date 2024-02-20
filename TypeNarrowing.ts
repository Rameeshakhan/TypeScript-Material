// type guard

function myFunction (arg: string | number){
    if(typeof arg === 'string'){
        return arg.toLowerCase
    }
    return arg +2
}

// in operator in type narrowing

interface User {
    name: string,
    email : string
}

interface Admin {
    name: string,
    email : string,
    isAdmin: boolean
}

function checkAdmin(chk : User | Admin){
    if('isAdmin' in chk){
        return chk.isAdmin
    }
    return 
}
 
// instanceof

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
    } else {
      console.log(x.toUpperCase());
    }
  }

  // learn type predicates
 

export{}