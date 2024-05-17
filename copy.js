/**
 * Two ways to copy anything in javascript
 * 
 * Deep copy
 * shallow copy
 * 
 */

// pass by value / call by value
// pass by reference / call by reference

/**
 * Primitive Data Types
 * NUmber
 * string
 * boolean
 * 
 */

/**
 * Non Primitive Data Types
 * 
 * arrays
 * objects
 * 
 */

/**
 * name1 - 101
 * name2 - 102
 */

let name1 = 'ganesh'
let name2 = name1 // pass by value - ganesh

name1 = 'ravi'

console.log(name1)
console.log(name2)

const user1 = {
    name: 'ganesh'
}

/**
 * user1 - 201
 * user2 - 201
 */

const user2 = user1 // pass by reference

const user3 = Object.assign(user1)

const user4 = {...user1}; // pass by value

const user5 = JSON.parse(JSON.stringify(user1))

user1.name =  'sravya'
user2.course = 'javascript'
user3.age = 23

user4.degree = 'btech'



console.log('user1 : ', user1)
console.log('user2 : ', user2)
console.log('user3 : ', user3)
console.log('user4 : ', user4)
console.log('user5 : ', user5)