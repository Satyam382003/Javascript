// //for loop
// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
       
        
//     }
    
// }

let Heros = ["spiderman", "batman", "superman", "captain america","thor", "Ironman"]
console.log(Heros.length)
for (let i = 0; i < Heros.length; i++) {
    const element = Heros[i];
    console.log(element);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log('5 is detected')
        continue
    } 
    console.log(`value of i is ${index} `)
    
}