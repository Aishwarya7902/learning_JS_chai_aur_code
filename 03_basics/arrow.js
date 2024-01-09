const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// ARROW FUNCTIONS TALK

// const addTwo = (num1, num2) => { // EXPLICIT RETURN
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   //IMPLICIT RETURN..no need to give return ...it is understood ...but only if u do not provide curly braces


// const addTwo = (num1, num2) => ( num1 + num2 ) //u can use paranthesis ...if u want to write multiple sttements

const addTwo = (num1, num2) => ({username: "hitesh"}) //u can use paranthesis ...if u want to return objects


console.log(addTwo(3, 4))


