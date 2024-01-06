// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh", //by default key becomes a string
    "full name": "Hitesh Choudhary", //there is no need to make a key a string coz by default it is a string itself
    [mySym]: "mykey1", //if we want to make a symbol as key ....we wil have to use this syntax
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  we can use dot only when we have not made key as a string
// console.log(JsUser["email"]) here we used email as a string coz by default all key becomes string
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym]) //syntax to print a symbol ....here we will not use mySym as "mySymb" coz it is a symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  ....freeze can be used when we want that no one should make changes in our object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this can access all properties within the object
}

console.log(JsUser.greeting()); //syntax to call methods  of an object
console.log(JsUser.greetingTwo());
