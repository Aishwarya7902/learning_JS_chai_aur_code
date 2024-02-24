Array ✅
Objects ❌

/*
The forEach method is a built-in function in JavaScript that is used to iterate over the elements of an array. 
It takes a callback function as an argument and applies that function to each element in the array. 
However, it cannot be directly used with objects because objects in JavaScript do not have a built-in method like arrays do.
*/


//for each is used with Array
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // for each takes a callback function
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
