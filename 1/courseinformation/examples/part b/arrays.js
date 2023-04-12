//first example where push is used to add on the value 5 to the back of the array
console.log('============================================')
console.log('============================================')
console.log('============================================')
console.log(':First Example:')

const t = [1, -1, 3]
t.push(5)

console.log(t.length, 'length of array')
console.log(t[1], 'position -1 in the array t (notice 0 base notation)')

//example use of forEach
console.log('============================================')
console.log(':Example of using forEach:')

t.forEach(value =>{
    console.log(value)
})

//second example using concat to add 5 to a new array
console.log('============================================')
console.log(':Second Example:')

const w = [1, -1, 3]
const w2 = w.concat(5)

console.log(w, 'array w unchanged')
console.log(w2, 'array w2 where w.concat(5) was used')

//third example where map is used to to create a new array and the original value is multiplied by 2
console.log('============================================')
console.log(':Third Example:')

const e = [1, 2, 3]
const e1 = e.map(value => value *2)

console.log(e, 'original array')
console.log(e1, 'a new array is created where the original arrays value is mulitiplied by 2')

//fourth example an array is transformed into an array containing strings of HTML
console.log('============================================')
console.log(':Fourth Example:')

const e2 = e.map(value => '<li>' + value + '</li>')

console.log(e, 'original array')
console.log(e2, 'map creates a new array where new values are strings of HTML')

//fifth example shows destructing assignment  where the variable first and second will receive the first two integers of the array as their values. 
//The remaining integers are 'collected into an array of their own which is then assigned to the variable rest
console.log('============================================')
console.log('Fifth Example')

const v = [1, 2, 3, 4, 5]
const [first, second, ...rest] = v

console.log(first, second, 'variables first and second')
console.log(rest, 'variable rest')

console.log('============================================')
console.log('============================================')
console.log('============================================')
//kinda basic but its good examples, thanks for the time.