/*
For In Loops can be used :
Objects  ✅
Arrays ✅
Maps ❌

/* 🌤️

The for...in loop in JavaScript is generally used to iterate over the enumerable properties of an object.
An enumerable property is one that can be iterated over using a loop, like for...in. 
While it may seem like you can use it with a Map object, it's not the recommended approach due to some key differences.

The issue is that for...in iterates over all enumerable properties of an object, including those inherited from the prototype chain.
Map objects, on the other hand, are designed to store key-value pairs, and their keys can be of any data type, including objects.
This can lead to unexpected behavior when using for...in with Map objects.

*/

Note :❤️ For In Loop gives key in case of object and index in case of arrays.
*/

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {  //it will give error as maps can't be used with for in loop
//     console.log(key);
// }
