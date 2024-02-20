// In JavaScript, this is a special keyword that refers to the current execution context

/* 
1.Global Context:
If this is used outside of any function or object, it refers to the global object (in a browser environment, it would be the window object).
*/

console.log(this); // points to the global object (e.g., window in a browser)


/*
Function Context:

When this is used inside a regular function (not a method of an object), it depends on how the function is called.
If the function is called directly, this refers to the global object.
If the function is called as a method of an object, this refers to that object.
*/

function sayHello() {
  console.log(this);
}

sayHello(); // points to the global object (e.g., window in a browser)

var person = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // points to the 'person' object

/*

Event Handlers:

In the context of event handlers (like click or hover), this often refers to the DOM element that triggered the event.
*/

var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this); // points to the button element
});


/*

Constructor Functions:

When a function is used as a constructor (with the new keyword), this refers to the newly created object.
*/

function Person(name) {
  this.name = name;
}

var john = new Person('John');
console.log(john.name); // 'John'






