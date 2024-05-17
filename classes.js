/**
 * Classes - Javascript
 * Class is the blueprint of an object
 */

/**
 * const userObj = {
 *      name: 'abc',
 *      degree: 'xyz'
 * }
 */

class UserClass {
    name =  '';
    degree = '';

    constructor(name, degree) {
        this.name = name
        this.degree = degree
        console.log('this is contructor function')
    }

    printName() {
        console.log(this.name)
    }
    
    printDegree() {
        console.log(this.degree)
    }
}

const userObj1 = new UserClass("ashish", "mtech")

const userObj2 = new UserClass("ganesh", "btech")

const userObj3 = new UserClass("Sravya","MBA")

userObj1.printName()
userObj1.printDegree()

console.log(userObj3)


