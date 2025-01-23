// function loginuserMessage(username) {
//     if(username === undefined){
//       console.log("please Enter username: ")
//       return //In functions after Return it does not return anythings
//     }

//      return `${username} just logged In`
// }
// // console.log(loginuserMessage("satyam"))
// console.log(loginuserMessage())

// //2nd part
// function calculateCartPrice(val1, val2, ...num1){  //(... IS A SPREAD OPERATOR )
//     return num1

// }
// console.log(calculateCartPrice(100,150,200,500,1000))

// OBJECT IN FUNCTIONS
const user = {
    username:"satyam",
    price: "199",
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}
 handleobject({
    username: "sonu",
    price: "399",
 })

 //ARRAY IN FUNCTIONS
 const myNewArray = [100,200,300,400]

 function returnSecondValue(getArray){
    return getArray[2]
 }
 console.log(returnSecondValue(myNewArray))