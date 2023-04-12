const test = {
    prop : 42,
    func: function(){
        return this.prop
    },
};
console.log(test.func());

function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

  const john = {
    name : 'John',
    age: 32,
    education : 'BFA',
    greet: function(){
        console.log('Hello, my name is ' +this.name)
    },
    doAddition: function(a,b){
        console.log(a+b)
    }
  }
  setTimeout(john.greet.bind(john), 1000)
  john.greet()
  john.doAddition(1,4)

  const referenceToAddition = john.doAddition
  referenceToAddition(10,15)
// When calling the method through a reference, 
//the method loses knowledge of what the original this was. 
//Contrary to other languages, 
//in JavaScript the value of this is defined based on how the method is called. 
//When calling the method through a reference the value of this becomes the so-called global object
// and the end result is often not what the software developer had originally intended.
  const referenceToGreet = john.greet
  referenceToGreet()

  john.growOlder = function(){
    this.age += 1
  }

  console.log(john.age)
  john.growOlder()
  console.log(john.age)
