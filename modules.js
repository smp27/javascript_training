/**
 * Modules - Javascript
 * 
 * import - {} / without braces
 * export - normal / default (only one for one file)
 * 
 */

// const data = require('./data.js')

// import test, { data, result } from './data.js'

// console.log(data)

// console.log(result)
// console.log(test)



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


/**
 * fetch
 * setTimeout
 * document
 * navigator
 */

 import { threadId, isMainThread } from "worker_threads";
 
 console.log('isMainThread : ', isMainThread);
 console.log('threadId : ', threadId);

 const promise1 = new Promise((resolve) => {
    resolve(1)
 })

 const promise2 = new Promise((resolve) => {
    resolve(2)
 })
 
 const promise3 = new Promise((resolve) => {
    resolve(3)
 })

 const promise4 = new Promise((resolve) => {
    resolve(4)
 })

 const promise5 = new Promise((resolve) => {
    resolve(5)
 })

promise1.then(res => {
    console.log('threadId promise 1: ', threadId);
    console.log('isMainThread : ', isMainThread);
    console.log(res)
})

promise2.then(res => {
    console.log('threadId promise 2: ', threadId);
    console.log('isMainThread : ', isMainThread);
    console.log(res)
})

promise3.then(res => {
    console.log('threadId promise 3: ', threadId);
    console.log('isMainThread : ', isMainThread);
    console.log(res)
})

promise4.then(res => {
    console.log('threadId promise 4: ', threadId);
    console.log('isMainThread : ', isMainThread);
    console.log(res)
})

promise5.then(res => {
    console.log('threadId promise 5: ', threadId);
    console.log('isMainThread : ', isMainThread);
    console.log(res)
})

