/**
 * Error Handling - Javascript
 * try {} catch() {} finally {}
 */

let arr = [2,3]

const errorFunc = (name) => {
    try {
        console.log(name)
        throw 'Error from try block'
    } catch(e) {
        console.log('error : ', e)
    } finally {
        arr.push(1)
        console.log('testing finally block')
    }
}

errorFunc('ganesh')
console.log(arr)
