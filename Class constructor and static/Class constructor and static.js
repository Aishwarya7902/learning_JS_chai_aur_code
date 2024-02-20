/*
Class Constructor:
Think of a class constructor like a blueprint for creating objects. Imagine you want to make a bunch of houses. The class is like a template for the house,
and the constructor is like the builder who follows the template to actually build each house.

In JavaScript, a class is a way to organize and create objects.
The constructor is a special method inside the class that gets called automatically when you create a new object based on that class. 
It sets up the initial state or properties of the object.
*/

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

// Creating a new car object using the class constructor
const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry

/*
Static Method:
Now, let's talk about static methods. Imagine you have a tool that's common to all houses, like a paint sprayer.
You don't need a specific house to use it; it's not tied to any particular instance of a house. 
In the context of a class, a static method is similar. It's a method that belongs to the class itself, not to instances of the class.
*/

class MathOperations {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

// Using static methods without creating an instance of the class
console.log(MathOperations.add(5, 3)); // Output: 8
console.log(MathOperations.subtract(8, 3)); // Output: 5

/*
In this example, add and subtract are static methods of the MathOperations class. You can use them without creating an instance of the class. 
They are like standalone tools that are associated with the class itself.
*/
