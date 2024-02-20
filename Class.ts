class User {
    public email : string;
    #name : string; // #keyword is a js thing to make an attribute private you can use private keyword aswell
    private readonly city : string = "" // default initialization

    constructor (email: string , name : string){
        this.email = email;
        // this.name = name
    }
}

const user1 = new User("r@gmail.com" , 'ram')

// most readable way to wirte a class 

class Laptop {
    protected  price : number = 4030304
    constructor(
        public name: string , 
        private details : string
        ) {
        }
        
        get getPrice(): number{
            return this.price
        }

        set setPrice(price) {
            this.price = price
        }
    }

class InheritedLaptop extends Laptop{

    changeCourseCount(){
        this.price = 5
    }
}

export {}
