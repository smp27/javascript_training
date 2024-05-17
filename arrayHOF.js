
/**
 * 
 * Array Higher Order Functions
 * 
 * find
 * includes
 * map
 * filter
 * reduce
 * flat
 * forEach
 * for of
 * findIndex
 * some
 * every
 * 
 */


const arr = [4,2,6,7,3,9,1,5,8]
const num = 1

const flatArr = [2,3,1,5,6, [3,6,8,9, [6,8,2]]]

const flattedArr = flatArr.flat()

console.log('flattedArr : ', flattedArr.flat())


const students = ['sravya', 'ravi', 'ganesh', 'manikanta']

const element = arr.findIndex(function(ele){
    return ele === num
})

console.log('findIndex : ', element)

// some --- condition || first || second ...
const someELements = arr.some(function(ele) {
    return ele > 8
})

console.log('some : ', someELements)

// every ---- condition && first && second ...
const everyELements = arr.every(function(ele) {
    return ele > 8
})

console.log('every : ', everyELements)

/**
 * for(let i =0, i < arr.length; i++) {}
 * for(let element of arr) {}
 */

for(let ele of arr) {
    // console.log('ele : ' + ele)
}

const newStudents = [];

students.forEach(function(ele, index) {
    newStudents.push(ele)
})

console.log(newStudents)
 
// Map -- it maps each element of an array with the condition and modifies it and return a new array

const newArr = arr.map(function(ele, index) {
    return ele - 1
})

console.log(newArr)

// Filter -- filters elements of an array with the condition

const evenArr = arr.filter(function(ele, index) {
    return ele % 2 == 0
})

const oddArr = arr.filter(function(ele, index) {
    return ele % 2 != 0
})

const lessThanFive = arr.filter(function(ele, index) {
    return ele > 5
})

console.log(evenArr)
console.log(oddArr)
console.log(lessThanFive)

// Reduce 
/**
 * Array.reduce(function(Accumulator, CurrentElement, Index){}, initialValue)
 */

// const arr = [4,2,6,7,3,9,1,5,8]

const sum = arr.reduce(function(accumulator, element, index) {
    return accumulator + element // 0 + 4 = 4 -- 4 + 2 = 6, 6 + 6 =12, 
}, 0)

console.log(sum)

const mul = arr.reduce(function(accumulator, element, index) {
    return accumulator * element
}, 1)

console.log(mul)


// Find

// const isFound = arr.find(function(a) {
//     return a === num
// })

// console.log(isFound)


// const isPresent = students.find(function(name) {
//     return name === 'ashish'
// })

// console.log(isPresent)

// includes

// const isPresent = students.includes('ravi')

// console.log(isPresent)

// const isFound = arr.includes(22)
// console.log(isFound)

// Hoisting

// Synchronous ---- one by one, line by line
// Asynchronous ---- parallel 

// Top level code


/**
 * 
 * Global Execution Context
 * 
 * 
 * 
 * |        |
 * |        |
 * |        |
 * |        |
 * |        |
 * |        |
 * |        |  
 * ----------
 * 
 */

/**
 * Javascript ----- Synchronous single threaded language --------------------------------
 * 
 * 
 * 
 * Very Very Important Javascript Interview Concepts...
 * 
 * closures  ---- Inner function which has access to its outer / parent function / lexical scope
 * callbacks ---- Function passed as an argument to another function
 * HOF ---- A function which accepts one or more functions as parametersor return another function
 * Anonymous functions ---- A function without function name
 * 
 */