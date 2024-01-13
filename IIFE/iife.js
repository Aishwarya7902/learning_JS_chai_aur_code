// Immediately Invoked Function Expressions (IIFE)

// if u wanna write two IIFE in a same file u will have to use ;



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //if u want to pass arguments.....u can use this syntax
