const name = "satyam"
const surname = "pandey"

console.log(`My name is ${name} and i'm here to learn something and my surname is ${surname} `);

const gameName = new String('satyam-S-p')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('s'))
// console.log(gameName.lastIndexOf())
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-3,2)
console.log(anotherString)
const newStringOne = "    satyam    ";
console.log(newStringOne.trim())