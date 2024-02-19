
/*

Imagine you have a magic pen that can draw in different colors. This pen is like a function in JavaScript, and you can use it to draw pictures (perform actions).

Now, let's say you want to make sure that every time you use this pen, it always draws in your favorite color. That's where bind comes in.

With bind, it's like creating a special version of the pen that is permanently set to your favorite color. So, no matter where you take this special pen, it will always draw in your favorite color.

In JavaScript terms:
*/

// Original pen (function)
function drawPicture() {
  console.log("Drawing a picture!");
}

// Your favorite color (desired "this" value)
var favoriteColor = "blue";

// Creating a special pen using bind
var specialPen = drawPicture.bind(favoriteColor);

// Now, every time you use specialPen, it draws in your favorite color
specialPen(); // Output: Drawing a picture!

/*
In this analogy, bind is like making a magical pen that always draws in your favorite color, no matter where you use it.
The function drawPicture remains unchanged, but you've created a new version (specialPen) with a fixed color.
*/



***************************************************** LET'S UNDERSTAND USING A SIMPLE ANALOGY******************************************************************
/*
Socho tumhare paas ek remote control hai jo TV ko chalata hai. Remote control (function) se TV (action) ko control kiya ja sakta hai.

Ab maan lo tum chahte ho ki har baar jab bhi remote control use karo, woh hamesha ek khaas channel par hi chale. Yahan bind ka istemal aata hai.

bind ka use karke aisa lagta hai jaise tum ek naya remote control bana rahe ho, lekin isme ek fix channel set kiya hua hai.
Toh har baar jab bhi tum is naye remote control ko istemal karo, woh hamesha us fix channel par hi TV ko chalayega.

*/

// Original remote control (function)
function pressButton() {
  console.log("Changing the channel!");
}

// Tumhara pasandeeda channel (desired "this" value)
var favoriteChannel = 5;

// Bind ka use karke ek naya remote control banaya gaya
var specialRemote = pressButton.bind(favoriteChannel);

// Ab har baar jab bhi tum specialRemote ka istemal karo, woh hamesha us fixed channel par hi TV ko chalayega
specialRemote(); // Output: Changing the channel!


/*
Is analogy mein, bind ka istemal ek aise remote control banane ke liye kiya gaya hai jo hamesha ek fix channel par hi kaam kare,
jaise ki tumhara pasandeeda channel. Original function (pressButton) waisa hi rehta hai, 
lekin bind se ek naya version banta hai jiska "this" hamesha fix channel hota hai.
*/
