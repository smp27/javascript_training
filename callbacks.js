function sumOfTwo(a,b) {
    return a + b;
}

function MulOfTwo(a,b,c) {
    return a * b * c;
}

function subOfTwo(a,b) {
    return a - b;
}

/**
 * Callbacks - Javascript
 * ----------------------------------------------------------------
 * A function passed as an argument / parameter to another function
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} operation 
 * @returns 
 */

function calculate(a = 10, b = 20, c= 30, operation1, operation2, operation3) {
    try {
        console.log('a : ', a)
        console.log('b : ', b)
        console.log('c : ', c)
        const result1 = operation1(a,b,c)
        const result2 = operation2(a,b,c)
        const result3 = operation3(a,b,c)
        return function() {
            return [
                {
                    sum: result1
                },
                {
                    mul: result2
                },
                {
                    sub: result3
                }
            ]
        }
    } catch(err) {
        console.log(err.message)
    }
}

const result = calculate(5,3,1,sumOfTwo, MulOfTwo, subOfTwo)

console.log('result : ', result())


// function showMessage(printMessage) {
//     printMessage('Hello World')
// }

// function alertMessage(message) {
//     console.log(message)
// }

// showMessage(alertMessage)


/**
 * Higher Order Functions - Javascript
 * 
 * A function that takes one or more functions as an argument or returns a function as a result
 * 
 */