/**
 * Array Methods
 * 
 * length
 * toString
 * at
 * join
 * push
 * pop
 * shift
 * unshift
 * concat
 * sort
 * splice
 * slice
 * delete
 * 
 * find
 * includes
 * map
 * filter
 * reduce
 * flat
 * 
 * 
 */

const arr = [2,4,6,8,10,12,14]


console.log('find : ', arr.find((a) => a === 4))

const oddArr = [1,3,5,7,9]

// arr[7] = 16

console.log('length of an array : ', arr.length)

console.log('array string : ', arr.toString()) // diff between join() and toString

console.log('At method : ', arr.at(3)) // arr[3]

console.log('push : ', arr.push(18)) // add at end

console.log('pop : ', arr.pop()) // remove from end

console.log('unshift : ', arr.unshift(20)) // add at start

console.log('shift : ', arr.shift()) // remove from start

// const newArr = arr.concat(oddArr);

// console.log('concat : ', arr.concat(newArr))

// console.log('new Arr : ', newArr)

const strArr = ['w', 'h', 'i', 'o', 'a', 'd', 'b']

const numArr = [4,3, 10, 5, 20, 7,8,2]

console.log('sort string arr : ', strArr.sort())
console.log('sort number arr : ', numArr.sort(function(a, b){return a - b}))


/**
 * array splice
 * @param 4
 * first index of operation start
 * second elements to remove
 * third 
 * 
 * arr.splice(start index, elements to be removed, elements to be added)
 */

// console.log('splice arr : ', arr.splice(2, 3, 16, 18, 20) ) // remove elements from arr

/**
 * array slice
 * @param 
 * first - start index
 * second - end index // optional
 */

console.log('slice arr : ', arr.slice(3,7))

// console.log('delete : ', delete arr[6]) // deletes an element of an array

console.log('Array : ', arr)