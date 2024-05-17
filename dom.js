// /**
//  * Multi line comments
//  * 
//  * Variable declearation in Java / C / CPP
//  * 
//  * DataType VariableName = Value
//  */

// // Variable Declarations
// // var VariableName = Value

// var num = 10
// var name = 'ashish'
// var course = 'javascript'

// // functions - javascript
// // function functionName() {}

// function printName() {
//     var name = document.getElementById('name').value
//     var course = document.getElementById('course').value
//     alert(name)
//     console.log(name)
//     console.log(course)
// }

console.log(1)


setTimeout(() => {
    console.log(2)
}, 0)

const promise1 = new Promise((resolve) => {
    resolve(4)
})

promise1.then((res) => console.log(res))

let startTime = Date.now()
const endTime = Date.now() + 5000
// console.log(startTime)

// while(startTime < endTime) {
//     startTime = Date.now()
// }

console.log(3)


/**
 * callbacks
 * setTimeout
 * promises - async await
 * 
 */