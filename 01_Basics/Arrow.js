// const chai = function(){
//     let username = "satyam"
//     console.log(this.username)
// }
// chai()  //Output is undefined

const chai = ()=>{  //Arrow function
    let username = "satyam"
    console.log(this)
}
chai()

// const addTwo = (num1, num2) =>{
//   return(num1 + num2)
// }

// console.log(addTwo(3,5))

// const addTwo = (num1, num2) => (num1 + num2) //IMPLICIT RETURN 
  
  
//   console.log(addTwo(3,5))

  const addTwo = (num1, num2) => ({username:"satyam"}) //IMPLICIT RETURN 
  
  
  console.log(addTwo(3,5))