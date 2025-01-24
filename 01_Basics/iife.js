//IIFE (immediately invoked function expression)

(function chai(){ //Named IIfe
    console.log("Hey are you connected")
}) ();

( (name) =>{ //It is not named IIFE it is simple IIFE
    console.log(`You are not connected ${name}`)
})("satyam")