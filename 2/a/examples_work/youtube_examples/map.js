// example for map https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3

var animals = [
    {name : 'Rudy', species : 'dog'},
    {name : 'Fifi', species : 'cat'},
    {name : 'Maggie', species : 'dog'},
    {name : 'Kevin Costner', species : 'fishtank'},
    {name : 'Professor', species : 'cat'}
]
// rewrite with arrow function
// var names = animals.map(function(animal) {
//     return animal.name + ' is a ' + animal.species
// })
var names = animals.map((animal) => animal.name)
// basic example of a for loop
// var names = []
// for (var i = 0; i < animals.length; i++){
//     names.push(animals[i].name)
// }

console.log(names);