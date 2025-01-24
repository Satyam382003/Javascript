// const balance = 1000

// if(balance<500){
//     console.log("Ohh,very less money in my account only 500.");
// }
// else if(balance<800){
//     console.log("Only 800 is left in my account.");
// }
// else if(balance<=1000){
//     console.log("Nice 1000 is left in my account but i need to add 200 more.");
// }else{
//     console.log("Yess i have 1200 in my account very nice.");
// }

// const loggedInuser = true;
// const creditcard = true;


// if(loggedInuser && creditcard){
//     console.log("I can buy a course for sure")
// }else{
//     console.log("Won't be able to buy a course")
// }

// const loggedInfromgoogle = false;
// const loggedInfromemail = false;

// if(loggedInfromgoogle || loggedInfromemail){
//    console.log(`Yess loggedIn from here:`)
// }else{
//     console.log(`I didn't logged In`)
// }

//SWITCH

const names = "Yesh"

switch (names) {
    case 1:
        console.log("Dhruv");
        break;
    case 2:
        console.log("Yesh");
        break;
    case 3:
        console.log("Sonu");
         break;
    case 4:
         console.log("Satyam");
        break;

    default:
        console.log("Then i don't know bro");
        break;
}

//Nullish coalescing operator(??): null and undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 100


console.log(val1);

//ternary operator
const Tea = 100;
Tea >= 80 ? console.log("Drink it") : console.log("Don't drink it")