const user = {
    fname: 'Niranjan',
    lname: 'Reddy',
    qual: 'MBA',
    stream: 'Marketing',
    company: 'IBM',
    mobile: 9876543210,
    addr: {
        city: 'hyd',
        pincode: 500001
    }
}

const arr = [1,3,5,7,9]

// Spread Operator {...}
// Expanding values from an object array
// {...source}


const newUser1 = user

const newUser2 = Object.assign(user)

const newUser3 = {...user}

console.log('newUser1 : ', newUser1)

console.log('newUser2 : ', newUser2)

console.log('newUser3 : ', newUser3)

// Rest Operator {...}
// collecting rest of the attributes
// {...target}

console.log(arr)

const [num1, ...newArr] = arr

console.log(num1)
// console.log(num2)
console.log(newArr)


const {mobile, ...newUser} = {...user}

console.log(mobile)
console.log(newUser)

// ... target = rest -- collects
// ... source = spread -- Expands

// {...rest} = {...spread}



function sumOfParams(...nums) {
    console.log(nums)
    const sum = nums.reduce((acc, curr, index) => acc + curr, 0)
    console.log(sum)
}

// function sumOfParams(num1, num2, num3, num4, num5, num6) {
//     console.log(num1, num2, num3, num4, num5, num6)
//     console.log(num1 + num2 + num3 + num4 + num5 + num6)
// }

sumOfParams(1,2,3,4,5,6,1,2,3,4,5,6)


