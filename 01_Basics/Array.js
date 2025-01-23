// let myArr = [1,2,3,4,5]
// console.log(myArr)
// console.log(myArr[3])
// const fruits = [];
// fruits.push("Apple", "Banana", "Mango", "Orange", "Mosambi", "", "", "Dragon fruit");
// console.log(Object.keys(fruits)) //giving indexes
// console.log(fruits.length);
// console.log(fruits[2])

// //pop
// fruits.push("Kiwi");
// // console.log(fruits)
// fruits.pop()
// console.log(fruits)

// myArr.unshift(10)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(7)) //-1 bcz the system doesn't knows

//join
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   console.log(matrix.join()) //it changes the typeof element from number or array to STRINGS
//   //slice
//   const animals = ["ant", "elephant", "donkey","tiger", "lion","horse"]
//   console.log(animals.slice(2,4))
//   console.log(animals.splice(2,5))

  //PART 2
  const marvel_heros = ["thor","captain","Ironman","Antman"]
  const dc_heros = ["superman", "flash", "batman"]

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros)

//  const all_heros = marvel_heros.concat(dc_heros)
//  console.log(all_heros)
// const allHeros = [...marvel_heros, ...dc_heros ] //this method is easy than the concat method
// console.log(allHeros)
// //
// const another_array = [1,2,3,4,[5,6],7,[8,9,10,[11,12,13]]]

// const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array)

//Interesting one
console.log(Array.isArray("satyam"))
console.log(Array.from("satyam"))
console.log(Array.from({name:"satyam"})) //interesting it does not convert this into array 

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1,score2,score3))  //converted into an Array

