const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) ...in this dc_heroes is an array itself ...hence when we push into marvel_heros then it will be pushed as an array at index 3

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  

// const allHeros = marvel_heros.concat(dc_heros) 

//REMEMBER : concat returns a new array and does not affect the original array
// console.log(allHeros);

// 💖SPLIT OPERATOR (PANI KE GLASS WAALA eg. BY HITESH SIR)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat breaks the array as individual elements ...we have to provide the depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //return if given is an array
console.log(Array.from("Hitesh"))    //makes a new array from the given
console.log(Array.from({name: "hitesh"})) // 💖interesting from INTERVIEW PERSPECTIVE : it will return empty object coz we will have
//to specify if we want to make the array using key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //we can make array from variables too.
