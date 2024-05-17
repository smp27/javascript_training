/**
 * Promises - Javascript
 * 
 * A special object which runs in the future
 * a Promise is an object that will produce a single value some time in the future
 * 
 * states of promise
 * 
 * Pending
 * Fullfilled / Resolved - Settled
 * Rejected - Settled
 * 
 */


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 resolved')
//     }, 3000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise 2 Rejected')
//     }, 2000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 3 resolved')
//     }, 4000)
// })

// promise1.then((res) => console.log(res)).catch((err) => console.log(err))
// promise2.then((res) => console.log(res)).catch((err) => console.log(err))

// promise3
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('finally block')
//     })


/**
 * Promise APIs / Methods / Functions
 * 
 * Takes an array of promises as an input / argument / parameter
 * 
 * all - resolved only when all are resolved - fails even if one fails
 * allSettled - regardless of the status, it gives status and value for all promiese
 * race - it gives us first settled promise regardless of the status
 * any - it gives us first resolved promise
 * 
 */

// const promiseArray = [promise3, promise1, promise2]

// Promise.all(Array of promises)
// It will resolve only when all the promises are resolved

// Promise.all(promiseArray)
//     .then((data) => {
//         console.log('then block')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('error block')
//         console.log(err)
//     })

// Promise.allSettled(Array of Promises)
// It will execute regardless of the status of promise
// Array of objects with status and value

// Promise.allSettled(promiseArray)
//     .then(res => {
//         console.log('all settled then')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('all settled catch')
//         console.log(err)
//     })

// Promise.race(Array of Promises)
// it gives first settled promise regardless of the status

// Promise.race(promiseArray)
//     .then(res => {
//         console.log('race then')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('race catch')
//         console.log(err)
//     })


// Promise.race(Array of Promises)
// It will give the first resolved

// Promise.any(promiseArray)
//     .then(res => {
//         console.log('any then')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('any catch')
//         console.log(err)
//     })

// Promise Chaining 
// Asynchronous operations in a synchronous manner

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    }, 2000)
})

const result = promise1
    .then((res) => {
        console.log('res : ', res)
        return res * 2; 
    })
    .catch(err => {
        console.log('err : ', err)
    })

    console.log('result : ', result)