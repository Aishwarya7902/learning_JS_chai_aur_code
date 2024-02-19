/*

In JavaScript, the apply method is like a way of telling a function what object it should think of as its owner (this), 
and what arguments it should use, all at once.

For example, if you have a function greet that says hello using this and takes two parameters:
*/

function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

//And you have an object person:

var person = {
  name: 'John',
  age: 25
};


//You can use apply to make the greet function act like it belongs to the person object:

greet.apply(person, ['John', 25]);


//This is like saying, "Hey greet function, when you run, act like you're part of the person object, and use these arguments."

