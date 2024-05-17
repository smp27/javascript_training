/**
 * Functions in Javascript - A block of code
 * 
 * default function
 * paramaterized function
 * return void/arr/string/intergar/object/ function 
 * 
 *  inner function
 * closures
 * 
 * callback function
 * Higher Order Function
 * anonymous function
 */


// function decleration
function printMessage(message) {
    // console.log('testing') // void
    return message // string
}

function paraFunction(num1 = 0, num2 = 0) {
    const message = printMessage('Sum : ')
    // return { operation : message, result:  num1 + num2 }// number
    return [num1, num2]
}

// function definition
const funcVar1 = printMessage('Hello World')

const funcVar2 = printMessage('Welcome to javascript')

const funcVar3 = printMessage('Functions class')

const funcVar4 = printMessage('Good morning')


console.log(funcVar1)
console.log(funcVar2)
console.log(funcVar3)
console.log(funcVar4)

var paraFuncVar1 = paraFunction(2,7) // 2 + 7

let paraFuncVar2 = paraFunction(1,5)

const paraFuncVar3 = paraFunction(2)

const paraFuncVar4 = paraFunction(2,3)

const paraFuncVar5 = paraFunction(8,9)

console.log(paraFuncVar1)
console.log(paraFuncVar2)
console.log(paraFuncVar3)
console.log(paraFuncVar4)
console.log(paraFuncVar5)


function addNumbers(num1) {
    
    return function(num2) { // closure || inner function
        console.log('num2 : ', num2)
        return function(num3) {
            console.log('num3 : ', num3)
            return num1 + num2 + num3
        }
    }
}

/**
 * const addition = function(num1, num2) {
 *      console.log('num1 : ', num1)
        console.log('num2 : ', num2)
        return num1 + num2
 * }
 */

const addition1 = addNumbers(2)
const addition2 = addition1(4)
const addition3 = addition2(6)

// console.log(addition2)

console.log(addition3)

/**
 * function addition (num2) {
 *  return 2 + num2
 * }
 */

// console.log(addition1(4))