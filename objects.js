/**
 * Object -- Javascript
 * 
 * assign
 * entiries
 * freeze
 * create
 * keys
 * values
 * hasOwnProperty
 * 
 */

// User Array
// const userArr = [
//     'ravi',
//     25,
//     'btech',
//     'hyd'
// ]

// console.log('includes : ', userArr.includes('niranjan'))

// console.log(userArr[0])

// User Object
//['key']: ['value']

const user = {
    name: 'ravi',
    age: 25,
    degree: 'btech',
    city: 'hyd',

    getUserName: function() {
        return this.name
    },
    addr: {
        district: '',
        city: '',
        pincode: ''
    },
    marks: [
        20,40,60
    ]
}

console.log(user['age'])
console.log(user.city)

console.log(user.getUserName())


const source = {c: 3, d: 4}

source['a'] = 1
source['b'] = 2


// Shallow copy and Deep Copy in javscript

// Assign
const target = Object.assign(source) 
const newTarget = source

console.log(target)
console.log(newTarget)

//Freeze - will not be modified
const userDetails = {
    name: 'sravya'
}
Object.freeze(userDetails)
// userDetails.name = 'ravi'
// userDetails.company = 'ibm'
console.log('userDetails : ', userDetails)


// Keys -- Array of keys
console.log(Object.keys(user))

// values -- Array of values
console.log(Object.values(user))

// Entiries -- Array of keys and values in pair
console.log(Object.entries(user))


// Create
const newUser = Object.create(user)

console.log(newUser.city)

console.log('hasOwnProperty : ', user.hasOwnProperty('company'))



const printUserDetails = (name = 'ravi', age = 22) => {
    console.log(name)
    console.log(age)
}

printUserDetails('ganesh', 24)



const userArr = [
    {
        name: 'ravi'
    },
    {
        name: 'ganesh'
    },
    {
        name: 'sravya'
    },
    {
        name: 'manikanta'
    },
    {
        name: 'niranjan'
    },
]

const newUserArr = userArr.map((ele, index) => {
    if(ele.name === 'niranjan') {
        ele.isNew = true
    } else {
        ele.isNew = false
    }
    return ele
})

console.log(newUserArr)

const filteredUsers = newUserArr.filter((ele, index) => ele.isNew === false)

console.log(filteredUsers)


const arr = [1,2,3,4,5,6,7]

// for-of loop - Array
// for(let a of arr) {
//     console.log(a)
// }

// for-in loop - Objects
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const key = 'c'

console.log(obj.c)  
console.log(obj['d'])

for(let prop in obj) {
    console.log(prop , ' : ' , obj[prop])
}