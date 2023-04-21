//example for filter https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
var animals = [
    {name : 'Rudy', species : 'dog'},
    {name : 'Fifi', species : 'cat'},
    {name : 'Maggie', species : 'dog'},
    {name : 'Kevin Costner', species : 'fishtank'},
    {name : 'Professor', species : 'cat'}
]

var isDog = function(animal){
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)

// var dogs = []
// for (var i = 0; i < animals.length; i++){
//     if (animals[i].species === 'dog')
//     dogs.push(animals[i])
// }

console.log(dogs);
