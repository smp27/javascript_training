/**
 * Destructuring, Spread operator and Rest operator
 * 
 * 
 * 
 */

// User Object
const user = {
    fname: 'Niranjan',
    lname: 'Reddy',
    qual: 'MBA',
    stream: 'Marketing',
    company: 'IBM',
    addr: {
        city: 'hyd',
        pincode: 500001
    }
}

// const fname = user.fname
// const qual = user.qual
// const stream = user.stream

// Destructuring objects and arrays
// it is the process of extracting / getting values / attributes from objects and arrays
// const/let/var {keyName: aliasName = defaultValue} = object

const { fname: firstName = 'Ganesh', qual = 'Btech', stream, addr } = user

console.log(firstName , 'Have completed ', qual, 'in ', stream, 'stream')
console.log(addr)


const arr = [2,4,6,8,1,3,5,7,9]

// const num1 = arr[0]
// const num2 = arr[1]

const [num1 = 2, ,num2] = arr

console.log(num1, num2)