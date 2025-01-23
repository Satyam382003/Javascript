// //OBJECTS
// const mySym = Symbol("key1")
// const user = {
//     name: "satyam",
//     "surname" : "pandey",
//     [mySym]: "mykey1",  //symbol representation
//     age: 21,
//     email:"satyampandey382003@gmail.com",
//     company: "xyz",
//     designation: "depends",
// }
// console.log(user.email)
// console.log(user["surname"]) 
// console.log(user[mySym])

// //How to change the object value
// user.email = "satyampandey@gmail.com"
// Object.freeze(user)  //it will freeze the entire object and after that no changes takes place
// user.email = "pandeysatyam@gmail.com"
// console.log(user)

 //PART 2

//  const tinderuser = {}

//  tinderuser.name = "satyam"
//  tinderuser.age = 22
//  tinderuser.address = "Vinayak Enclave"
//  tinderuser.anyItem = false

//  console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}

// const targetvalue = Object.assign(obj1,obj2,obj3)
// console.log(targetvalue)

const course = {
    coursename : "Js in Hindi",
    teacher: "HiteshChoudhary",
    price: "999",
}
const{courseInstructor: instructor} = course
console.log(instructor);
