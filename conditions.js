/**
 * 
 * If
 * IF else
 * else If else
 * switch
 *  Ternary operator 
 * condition ? if block : else block
 */

/**
 * logical operators
 * 
 * AND -- &&
 * OR -- ||
 * NOT -- !
 * 
 */

/**
 * logical operators table
 *           AND    OR 
 *   0   0   0      0 
 *   0   1   0      1   
 *   1   0   0      1
 *   1   1   1      1
 */

function mulptipleConditions () {
    const percentage = 76

    if(percentage < 35) {
        console.log('Failed')
    } else if(percentage >= 35 && percentage <= 50){
        console.log('Passed')
    } else if(percentage > 50 && percentage <= 65 ) {
        console.log('Passed with second class')
    } else if(percentage > 65 && percentage <= 75) {
        console.log('Passed with First class')
    } else if(percentage > 75 ) {
        console.log('Passed with Distinction')
    }

    // condition ? if true : if false

    console.log(percentage < 35 ? console.log('Failed') : percentage >=35 && percentage < 50 ? console.log('Passed') : console.log('topper'))


    const day = 'thursday' // saturday || sunday

    console.log(day === 'saturday' || day === 'sunday' ? console.log('weekend') : console.log('weekday'))
    
    if(day === 'saturday' || day === 'sunday') {
        console.log('Weekend')
    } else {
        console.log('Week Day')
    }


    const status = true

    // Sample API response
    // fakestoreapi.com
    const skillsJson = {
        data: [
            'javascript',
            'react',
            'nodejs'
        ],
        count: 0,
        message: 'success',
        status: 200
    }

    const failedApiResponse = {
        data: [],
        count: 0,
        message: '',
        status: 500
    }

    // count - true, !count - false
    // count - false, !count - true

    if(!failedApiResponse.count) { 
        console.log('count not available')
    }

    /**
     * Falsy values in javascript
     * 
     * 0
     * false
     * ''
     * null
     * undefined
     * NAN -- Not A Number
     * 
     */

    console.log('Message : ', failedApiResponse.message)

    if(failedApiResponse.message != '') {  // undefined
        console.log('Data is Available')
    } else {
        console.log('Data is not available')
    }

}

mulptipleConditions();

/**
 * Loops - Recurring operations
 * 
 * while
 * do-while
 * for
 * 
 */

/**
 * String Methods
 * 
 * length
 * charAt / at
 * slice
 * substring
 * toUpperCase
 * toLowerCase
 * concat
 * trim
 * repeat
 * replace
 * split
 * 
 */