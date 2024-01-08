// 💖💖

/*
JavaScript has the following kinds of scopes:

->Global scope: The default scope for all code running in script mode.
->Module scope: The scope for code running in module mode.
->Function scope: The scope created with a function.
->In addition, variables declared with let or const can belong to an additional scope:
Block scope: The scope created with a pair of curly braces (a block).

*/


// 💖💖A function creates a scope, so that (for example) a variable defined exclusively 
// within the function cannot be accessed from outside the function or within other functions.

function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error


// 💖💖Blocks only scope let and const declarations, but not var declarations.

{
  var x = 1;
}
console.log(x); // 1

.....................................................................................
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined


// 💖💖
