/**
 * This is sample javascipt file 
 * it has 2 things
 * one is function
 * another is a varaible
 */



/**
 * Basic syntax html
 *  styling and its types
 *  script internal and external
 * How to  create a variable and function in javasript
 * How to write single line and multi line comments
 */


// Data types in javascript

let message = 'Hello world'

let notConfirm = null

let num = 12

const float = 12.45

var obj = {
    fname: 'a',
    lname: 'b',
    addr: {
        city: 'hyd'
    },
    skills: [
        'javascript',
        'react',
        'nodejs',
        'mongoDB',
        'Angular'
    ]
}


function printPara () {

    console.log('My name is ', user)
    
    var user = 'ashish'
    
    document.getElementById('para1').innerHTML = `My name is ${user.name}`; // printing sum of two numbers in a paragraph
}

var numbersArr = [1,2,3,4]

let randomArray = [
    'ashish', 
    8, 
    {class: 2}, 
    ['ruparani', 'ashok', 'sravya']
]

const bool = false

// Array of Numbers
const numArr = [0,2,3,4,5]

// Array of Strings
const strArr = ['a', 'b', 'c', 'd', 'e', 'f']

// Array of Objects
// users Api
const usersJson = {
    data: [
        {
            name: 'niranjan',
            addr: {
                city: 'hyd',
                street: [
                    ''
                ]
            },
            skills: [
                'java'
            ]
        }, 
        {
            name: 'ganesh'
        }, 
        {
            name: 'hareesh'
        }, 
        {
            name: 'ravi'
        }
    ],
    message: 'success',
    status: 200
}

const skillsJson = {
    data: [
        'javascript',
        'react',
        'nodejs'
    ],
    count: 3,
    message: 'success',
    status: 200
}

console.log(usersJson.data[0].name)

// Hoisting - top level variables and funtions get memory allocated to it

/**
 * Hoisting
 * Different Data types
 * objects
 * arrays
 * Json data
 * 
 */





console.log(test)



var test = 1;

console.log('testing')

function testing() {
    console.log('testing')

    var test1;
    function testing123() {

    }

    function test245() {
        let names = []
    }
}

const userDetails = []

function getUserDetails() {
    const name = document.getElementById('name').value
    const course = document.getElementById('course').value
    userDetails.push({name, course})
    console.log(userDetails)
}
