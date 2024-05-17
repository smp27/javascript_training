/**
 * 
 * Loops in javascript
 * 
 * while
 * do-while
 * 
 * for
 * 
 */


// Loop - reoccuring process 

// const numberArray = [1,2,3,4,5,6,7]

// console.log('first element : ', numberArray[0])
// console.log('second element : ', numberArray[1])

// let num = 10

// //while loop
// while(num < 1) {
//     console.log('inside while loop')
//     console.log(num)
//     num++ // num = num + 1
// }

// //do-while loop
// do {
//     console.log('inside do-while loop')
//     console.log(num)
//     num++
// } while(num < 1)

// //for loop
// //for(initialization, condition, increament)
// for(let i=0; i < numberArray.length ; i++) {
//     // console.log('inside for loop')
//     console.log(numberArray[i])
// }

// console.log('array length : ', numberArray.length)


// Strings in javascript

/**
 * string methods in javascript
 * 
 * length
 * charAt(index) // at
 * slice
 * substring
 * toUpperCase
 * toLowerCase
 * concat
 * trim
 * split
 * repeat
 * replace
 * 
 */


const text = 'Welcome To '
const text2 = 'Javascript'
let message = '';
const str = 'welcome to the world of javascript!'

console.log(text)

console.log('String Length : ', text.length)

console.log('charAt : ', text.charAt(1))

console.log('at : ' , text.at(3))

console.log('slice : ', text.slice(-21))

console.log('substring : ', text.substring(0,7))

console.log('upper case : ', text.toUpperCase())

console.log('lower case : ', text.toLowerCase())

console.log('concatenation : ', message.concat(text, text2))

console.log('trim : ', str.trim())

console.log('split : ', text.split(' '))

console.log('repeat : ', text2.repeat(3))

console.log('replace : ', text.replace('To', 'to javascript'))

/**
 * [
  'H', 'e', 'l', 'l',
  'o', ' ', 'W', 'o',
  'r', 'l', 'd', '!'
]
 */

function reverseString (strParam) {
    console.log(strParam)
    const strArr = strParam.split('')
    const reversedArray = strArr.reverse()
    const reversedString = reversedArray.join('')
    console.log(reversedString)

    // const arr = [0,1,2,3,4,5]
    // console.log(arr.reverse())
}

reverseString(str)