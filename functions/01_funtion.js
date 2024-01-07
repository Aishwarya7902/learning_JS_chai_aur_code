// 💖💖A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// -The name of the function.
// -A list of parameters to the function, enclosed in parentheses and separated by commas.
// -The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.
eg.
  function square(number) {
  return number * number;
}

.............................................................................................

// 💖💖 When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function,
// as shown in the following example:
  function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
.............................................................................................



// 💖💖When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function,
//   as shown in the following example:

  function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


............................................................................................................

// 💖💖functions can also be created by a function expression.

// Such a function can be anonymous; it does not have to have a name. For example

const square = function (number) {
  return number * number;
};
console.log(square(4)); // 16

..........................................................................................................

// 💖💖 However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, 
//   and also makes it easier to identify the function in a debugger's stack traces:

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

.........................................................................................................
// 💖💖Function expressions are convenient when passing a function as an argument to another function. The following example shows
//   a map function that should receive a function as
//   first argument and an array as second argument

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

....................................................................................................
// 💖💖 In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0:
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

...............................................................................................
// 💖💖The showProps() function  is an example of a function that takes an object as an argument.

// 💖💖 functions are themselves objects — and in turn, these objects have methods. 

..............................................................................................

// 💖💖 This code runs without any error, despite the square() function being called before it's declared. 
// This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

........................................................................................................................

// 💖💖Function hoisting only works with function declarations — not with function expressions

// 💖💖 Function scope :
// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
//   However, a function can access all variables and functions defined inside the scope in which it is defined.


