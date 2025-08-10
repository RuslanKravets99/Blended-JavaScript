//Task-1

// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const indexBlues = styles.indexOf("blues");
// styles[indexBlues] = "classic";

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//          console.log(`${i} - ${array[i]}`);
//     }
// }
// logItems(styles);

// //Task-2

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array){
//   const userName = prompt("Enter your name");
//   return array.includes(userName) ?  alert(`Welcome ${userName}`) : alert("User not found");
// }

// checkLogin(logins);

// //Task-3


// function calculateAverage(){

//   let argsNumber = 0;
// for(const arg of arguments){
//   if(typeof arg === 'number'){
//   argsNumber += arg;
//   }
// }
// return argsNumber / arguments.length;
// }


// console.log(calculateAverage(1, 2, 3, 4));


// //Task-4

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumAdjacentNumbers(arr) {
  
//   const result = [];
//  for(let i = 0; i < arr.length - 1; i++){
//   result.push(someArr[i] + someArr[i+1])
//  }
//  return result;
// }
// console.log(sumAdjacentNumbers(someArr));

// //Task-5

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers){
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   }
//   return "Sory, it is not an array!";
// }

// console.log(findSmallestNumber(numbers));

//Task-6


// function findLongestWord(string){
//  let someArr = string.split(" ");
//  let longestWord = someArr[0];
 
//  for (const word of someArr) {
//   if(word.length > longestWord.length ){
//     longestWord = word;
//   }
//  };
//  return longestWord;
//  };

//  console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//Task-7



// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const it of Object.keys(user)) {
//     console.log(`${it} : ${user[it]}`)
// }


//Task-8

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// let sum = 0;

// for (const n of Object.values(salaries)) {
//    sum += n;
// }
// console.log(sum);

//Task-9



// const calculator ={
//     read(a, b){
//         this.a = a; 
//         this.b = b;
//     },
//     exist(){
//        return this.hasOwnProperty('a') && this.hasOwnProperty('b');
//     },

//     sum(){
//         if(this.exist())
//         {return this.a + this.b;}
//         else{return "No such properties"}
//     },
//     mult(){
//          if(this.exist())
//         {return this.a * this.b;}
//         else{return "No such properties"}
//     },
    
// }

// calculator.read(5, 3);
// console.log(calculator.sum());  // 8
// console.log(calculator.mult()); // 15

//Task-10

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

//   function calcTotalPrice(fruits, fruitName){
//     return fruits.reduce((acc, item) => {
//         if(item.name === fruitName ){
//             return acc + item.price * item.quantity;
//         }
//         return acc;
//     },0)
//   }

//   console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Груша"));