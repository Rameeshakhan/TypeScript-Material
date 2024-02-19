// An Specialized Array with some restrictions

// const user: (string | number) [] = ['ere', 1]

let user: [string , number , boolean] 

user = ['ere', 1 , false]
// the order metters here i.e. at 0th index there should be string , at 1 only umber and so on

// this usually use in api calls

let rgb: [number, number, number] = [255,455,6]

type detail = [string , number]

const newDetail: detail = ['1fk' , 434]

// the value order is restricted but the value itself is changable

newDetail[0] = 'ewrlesdfl'

newDetail.push('ss')

console.log(newDetail)

export {}