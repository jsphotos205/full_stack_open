//basic example for functions
console.log('============================================')
console.log('============================================')
console.log('============================================')
console.log(':Function Example:')

const sum = (p1, p2) => {
    console.log(p1, 'value of p1')
    console.log(p2, 'value of p2')
    return p1 + p2
}

const result1 = sum(1,5)

console.log(result1, 'value of result1')

//if there is a single parameter, we can exclude the parentheses from the definition
console.log('============================================')
console.log(':Single Parameter Example:')

// const square = p => {
//     console.log(p)
//     return p * p
// }

//If the function only contains a single expression then the braces are not needed. 
//In this case, the function only returns the result of its only expression. 
//Now, if we remove console printing, we can further shorten the function definition:

const square = p => p * p

//This form is particularly handy when manipulating arrays - e.g. when using the map method:

const t = [1, 2, 3]
const tSquared = t.map(p => p *p)
console.log(tSquared)


//two ways to refrence functions: one is giving a name in a function DECLARATION:
console.log('============================================')
console.log(':Function DECLARATION Example:')

function product(a,b){
    return a * b
}
const result2 = product(2,6)
console.log(result2, 'the result of the product is 12')

//the other way to define the function is by using a function EXPRESSION:
//no need to give the funtion a name and the definition may reside among the rest of the code:
console.log('============================================')
console.log(':Function EXPRESSION Example:')

const average = function(a,b){
    return (a + b) / 2
}

const result3 = average(2,5)

console.log(result3)
console.log('============================================')
console.log('============================================')
console.log('============================================')