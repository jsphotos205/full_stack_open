class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('Hello, ' + this.name + ', you are ' + this.age + ' years old') 
    }
}

const john = new Person('John Sloan', 32)
john.greet()
const eleanor = new Person('Eleanor Krause', 31)
eleanor.greet()
const taylor = new Person('Taylor Bryant', 26)
taylor.greet()