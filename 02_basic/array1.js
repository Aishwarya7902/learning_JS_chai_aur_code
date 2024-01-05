// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   pushes element at back of array
// myArr.push(7)
// myArr.pop()     removes element from back of array

// myArr.unshift(9)  adds element at start of array 
//Note : unshift is not  preferred because its a costly operation

// myArr.shift()  removes element at start of array 

// console.log(myArr.includes(9));   it will tell if 9 is present in array or not....it returns a boolean value

// console.log(myArr.indexOf(3)); it return index of element if it is present or -1 otherwise

// const newArr = myArr.join()  binds all elements of array and returns a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // gives element from index 1 to 2 ....3 will not be included
//NOTE : slice does not change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // gives element from index 1 to 3 ....3 will  be included
//NOTE : splice  changes the original array.....it will remove the spliced indexes...i.e in above case it will remove elements at index 1,2,3 from the array

console.log("C ", myArr);
console.log(myn2);
