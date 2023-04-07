//example for objects
console.log('============================================')
console.log('============================================')
console.log('============================================')

const object1 = {
    name : 'Eleanor Krause',
    age : 32,
    education : 'PhD',
}

const object2 = {
    name : 'Full Stack web app development',
    level : 'intermediate studies',
    size : 5,
}

const object3 = {
    name : {
        first : 'Taylor',
        last : 'Bryant',
    },
    grades : [9, 10, 11, 12, 13],
    department : 'Rockhouse'
}

const fieldName = 'age'

object1.address = 'Boston'
object1['secret number'] = 1234234

console.log(object1.name, ': printed using the dot notation : object1.name')
console.log(object1[fieldName], ': printed using bracket notation : object1[fieldName]')
console.log(object1.address, ': printed to show dot notation adding properties to an object : object1.address')
console.log(object1['secret number'], ": printed to show bracket notation to add properties to an object : object1['secret number']")
console.log('the bracket notion allows for breaks in the name, dot notation does not')
console.log('============================================')
console.log('============================================')
console.log('============================================')