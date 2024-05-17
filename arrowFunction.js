
/**
 * 
 * Arrow function
 * 
 * assign anonymous function to a variable 
 * we dont need to write in braces if only one statement / line is present
 * we dont need to write return keyword if writing without braces
 * 
 */

// const num = 0
// const str = 'a'
// const obj = {}
// const arr = []
// const bool = false

/**
 * Functions in Javascript - A block of code
 * 
 * default function
 * paramaterized function
 * return void/arr/string/intergar/object/ function 
 * 
 */

let anyvalue = () => {}
let anyname = () => {
    console.log('arrow Function')
}

anyname()


const printName = (fname, lname) => {
    console.log(fname, lname)
}

printName('Niranjan', 'reddy')

const sumFunction = (param1, param2) => { console.log(param1 + param2) }

/**
 * {} -- block of code or body
 * 
 */

const subFunction = (param1, param2) => {
    if(param1 > param2) {
        console.log('param1 : ', param1)
    
        console.log('param2 : ', param2)
        console.log('sub : ', param2 - param1)
    }
}

const mulFunction = (param1, param2) => param1 * param2

sumFunction(4,6)

subFunction(9,6)

console.log(mulFunction(4,6))


const marks = [35, 64, 48, 53, 72, 86]

// Get the marks above 50
const passed = marks.filter(function(ele, index) {
    return ele > 50
})

const passed1 = marks.filter((ele, index) => ele > 50 )

console.log(passed)
console.log(passed1)

const arr = [2,4,6,8,10,12]

const sum = arr.reduce(function(acc, curr, index) {
    return acc + curr
}, 0)

const sum1 = arr.reduce((acc, curr, index) => acc * curr, 1)

console.log(sum)
console.log(sum1)