// example for reduce https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s
// list transformations : map filter reject
// reduce is the multitool of list transformation

var orders = [
    {amount : 250},
    {amount : 400},
    {amount : 100},
    {amount : 325},
    {amount : 223},
    {amount : 666},
]
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
// var totalAmount = 0
// for (var i = 0; i < orders.length; i++){
//     totalAmount += orders[i].amount
// }
console.log(totalAmount);