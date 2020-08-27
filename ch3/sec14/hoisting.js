// node hoisting.js

'use strict'
const values = [1, 7, 2, 9]
console.log('// You cannot access a local variable before it is defined')
{
  function doStuff() { // Start of block
    try {
      console.log(someVariable)
    } catch(e) { console.log(`Error: ${e}`) }
   // Attempting to access someVariable throws a ReferenceError
    let someVariable // Scope starts here
    console.log('someVariable:', someVariable) // undefined
   // Can access someVariable, value is undefined
    someVariable = 42
  console.log('someVariable:', someVariable) // 42
   // Can access someVariable, value is 42
  } // End of block, scope ends here

  doStuff()
}
console.log('// Local variables are hoisted')
// You can access a local variable in a function that
// precedes the definition, provided you will call it after
// the definition. The variable is "hoisted" to the enclosing scope.
{
  function doStuff() { 
    function localWork() {
      console.log(someVariable) // OK to access variable
      // . . .
    }
    let someVariable = 42
  
    localWork() // Prints 42
  }

  doStuff()
}
console.log('// The var scope is too broad')
{
  const someFunction = arr => {
    // i, element already in scope but undefined
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i]
      // . . .
    }
    // i, element still in scope
    console.log('i:', i) // 4
    console.log('element:', element) // 9
  }
  someFunction([1, 2, 7, 9])
}
console.log('// Functions are also hoisted. Therefore, you can define mutually')
// recursive functions.
{
  function isEven(n) { return n === 0 ? true : isOdd(n -1) }
  function isOdd(n) { return n === 0 ? false : isEven(n -1) }
  console.log('isEven(42):', isEven(42)) // true
}
console.log('// Archaic: Immediately invoked functions')
{
  (function () {
    var someVariable = 42
    function someFunction(arg) { return arg * arg }
    console.log(someFunction(someVariable))
  })() // Function is called here—note the ()
  // someVariable, someFunction no longer in scope

  console.log('typeof someFunction:', typeof someFunction) // undefined
  console.log('typeof someVariable:', typeof someVariable) // undefined
}
console.log('// Nowadays, just use let')
{
  {
    let someVariable = 42
    const someFunction = (arg) => { return arg * arg }
    console.log(someFunction(someVariable))
  }

  console.log('typeof someFunction:', typeof someFunction) // undefined
  console.log('typeof someVariable:', typeof someVariable) // undefined
}
