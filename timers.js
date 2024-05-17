/**
 * Timer Functions - Javascript
 * 
 * setTimeout
 * setInterval
 * setImmediate
 * 
 */

// Javascript is a synchronous single threaded language
// Timer functions are used to perfrom asynchronous operations in javascript


// Thread pool - 4 asynchronous operations at a time

function timeoutFunction() {

    // setTimeout(callbackFunction, timer in miliseconds)

    setTimeout(() => {
        console.log('inside setTimeout 1')
    }, 3000) // 3 seconds timeout

    setTimeout(function() {
        console.log('inside setTimeout 2')
    }, 3000)

    setTimeout(() => {
        console.log('inside setTimeout 3')
    }, 3000) // 3 seconds timeout

    setTimeout(function() {
        console.log('inside setTimeout 4')
    }, 3000)

    setTimeout(() => {
        console.log('inside setTimeout 5')
    }, 3000) // 3 seconds timeout

    setTimeout(function() {
        console.log('inside setTimeout 6')
    }, 3000)

    setTimeout(() => {
        console.log('inside setTimeout 7')
    }, 3000) // 3 seconds timeout

    setTimeout(function() {
        console.log('inside setTimeout 8')
    }, 3000)

}

// timeoutFunction()

function intervalFunction() {

    // setInterval(callbackFunction, interval timer)
    // clearInterval(setIntervalFunction)

    // Higher Order Functions

    setImmediate(() => {
        console.log('inside setimmediate')
    })

    let count = 1;
    const interval = setInterval(() => {
        console.log('inside setInterval : ', count)
        count++;
    }, 0)

    setTimeout(() => {
        clearInterval(interval)
    }, 0)

}

// intervalFunction()

function immediateFunction() {
    setImmediate(() => {
        console.log('inside setImmediate')
    })
}

// immediateFunction()


