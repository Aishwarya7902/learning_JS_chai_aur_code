/*for of can be used in:
1. array ✅
2.string ✅
3.map ✅
4.objects ❌

Note :❤️ For of Loop gives direct value.


*/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { //array
    //console.log(num);
}

const greetings = "Hello world!" //string
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  //Objects will give error with for of as they are not iteratable in normal conditions
//     console.log(key, ':-', value);
    
// }
