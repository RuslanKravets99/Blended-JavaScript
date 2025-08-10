//task-1
//
// let genres = ["drama", "action", "comedy",];
// genres.push("thriller");
// const indexAction = genres.indexOf("action");
// genres[indexAction] = "sci-fi";
// console.log(genres);

//task-2
// const users = ['Anna', 'Oleh', 'Yurii', 'Ira'];

// function checkUser() {
//     let userName = prompt("What is your name?").trim();
//     if(users.includes(userName)){
//         return console.log(`Welcome ${userName}!`);
        
//     };
//     return alert("User not found");

// }
// checkUser();

//task-3

// function average(...numbers){
//     let sumArgs = 0;
//     if(numbers.every(item => typeof item === "number")){
//        sumArgs = numbers.reduce((acc, value) => acc + value, 0);
//        return console.log(sumArgs / numbers.length);
//        };
//     return console.log("Not all arguments are numbers");
    
// }

// average(4, 8, 10);
// average(2, "hello", 4);

//task-4

// let fruits = ['apple', 'banana'];
// fruits.push("orange");
// const last = fruits.pop();
// console.log(fruits, last);

//task-5

// let numbers = [10, 20, 30];
// numbers.unshift(5);
// const firstDelete = numbers.shift();
// console.log(numbers, firstDelete);

//task-6

// let cars = ['BMW', 'Audi', 'Tesla', 'Honda'];
// const indexTesla = cars.indexOf("Tesla");
// cars[indexTesla] = "Porsche";
// const searchHonda = cars.includes("Honda");
// console.log(searchHonda);
// cars.splice(1,1);
// const newArr = cars.slice(0,2);
// console.log(cars, newArr);
 
//task-7

// const numbers = [5, 12, 8, 130, 44];

// numbers.forEach( num => console.log(`Value: ${num}`));
// let multiplyArr = numbers.map( n => n * 3);
// const moreTen = numbers.filter(n => n > 10);
// let sumNum = numbers.reduce((acc, n) => n + acc, 0);
// console.log(multiplyArr, moreTen, sumNum);

//task-8

// const gadgets = [
//   { name: "TV", price: 18000, quantity: 1 },
//   { name: "Headphones", price: 3000, quantity: 2 },
//   { name: "Smartwatch", price: 9500, quantity: 1 },
//   { name: "Speaker", price: 4000, quantity: 3 },
//   { name: "Tablet", price: 15500, quantity: 2 },
// ];

// let cheapGadget = gadgets
// .filter(gadget => gadget.price < 10000)
// .map(gadget => gadget.name);

// let sumGadget = gadgets
// .filter(gadget => gadget.price > 5000)
// .reduce((acc, gadget) => acc + gadget.price * gadget.quantity, 0);

// let totalSumG = gadgets.reduce((acc, gadget) => acc + gadget.quantity,0);

// console.log(cheapGadget, sumGadget, totalSumG);

//task-9

// const book = {
//   title: "1984",
//   author: "George Orwell",
//   year: 1949
// };

// book.genre = "Dystopian";
// book.year = 1950;
// delete book.author;
// for (const item in book){
//     console.log(`${item}:${book[item]}`);
    
// };

//task-10

// const user = {
//   name: "Sasha",
//   age: 22,
//   hobby: "gaming",
//   premium: true
// };

// user.mood = "Happy";
// user.hobby = "Skydiving";
// user.premium = false;
// for (const key in user){
//     console.log(`${key}:${user[key]}`)
    
// };

// const users = [
//   { name: "Ivan", age: 28, city: "Lviv" },
//   { name: "Olena", age: 22, city: "Kyiv" },
//   { name: "Taras", age: 19, city: "Odesa" },
// ];
// for (const user of users) {
//   if (user.age >= 18) {
//     user.isAdult = true;
//     console.log(`Name :${user.name}, City: ${user.city}, Adult: ${user.isAdult}`);
//     }
//   else{user.isAdult = false}    
// };

//task-11

// const books = [
//   { title: "Clean Code", author: "Robert C. Martin", price: 850, stock: 3 },
//   { title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 990, stock: 0 },
//   { title: "Eloquent JavaScript", author: "Marijn Haverbeke", price: 720, stock: 5 },
//   { title: "You Don't Know JS", author: "Kyle Simpson", price: 1100, stock: 2 },
// ];

// for (const {title, author, price, stock} of books) {
//   if(stock > 0){
//     console.log(`Title: ${title}, Author: ${author}, Price: ${price}, In Stock: ${stock}`);
    
//   }
// };

// const expensiveBook = books
// .filter( ({price}) => price > 900)
// .map(({title}) => title);

//task-12

// const courses = [
//   { title: "JavaScript Basics", price: 1500, duration: 20 },
//   { title: "React from Scratch", price: 2500, duration: 35 },
//   { title: "HTML & CSS", price: 1000, duration: 15 },
//   { title: "Node.js Advanced", price: 3000, duration: 40 },
//   { title: "Git & GitHub", price: 800, duration: 10 },
// ];

// for (const {title, price, duration} of courses) {
//   if (duration > 15) {
//     console.log(`Course: ${title}| Duration: ${duration} | Price: ${price}`);
    
//   }
// };

// const expensiveCourse = courses
// .filter(({price}) => price > 1500)
// .map(({title}) => title);

// console.log(expensiveCourse);

//task-13

// const electronics = ["TV", "Laptop", "Smartphone"];
// const accessories = ["Mouse", "Keyboard"];

// const newArr = [...electronics, ...accessories];
// console.log(newArr);


// //!==========================================================

// function multiplyAll(...args){
//  let array = args.reduce( (acc, n) => acc * n, 1);
//  return array;
// };
// console.log(multiplyAll(2, 3, 4));
// console.log(multiplyAll(5, 2));

// //!==========================================================

// const baseUser = {
//   name: "Ivan",
//   age: 30,
//   active: true
// };

// const updatedUser = {...baseUser, age: 35, city: "Lviv"}
// console.log(updatedUser);

// task-14

// const numbers = [2, 5, 8, 10];

// const newArr = numbers.map(n => n*2);

// const numbers = [3, 7, 4, 8, 12, 5];

// const filterN = numbers.filter( n => n % 2 === 0 ) ;

// const numbers = [2, 5, 7, 10, 3];

// const newArr = numbers
// .filter( n => n > 5)
// .map( n => n * 3);

// const users = [
//   { name: "Anna", age: 28 },
//   { name: "Ivan", age: 34 },
//   { name: "Olena", age: 22 },
//   { name: "Stepan", age: 41 },
// ];

// const usersOld = users
// .filter( ({age}) => age > 30)
// .map(({name}) => name);
// let numbers = [12, 5, 8, 130, 44];
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// const arr = numbers.map( n => n.toString() + " units")
// console.log(arr);

//!=======================REDUCE METHOD==========================================

// const purchases = [
//   { item: "apple", price: 30 },
//   { item: "banana", price: 10 },
//   { item: "orange", price: 20 },
// ];

// const sum = purchases.reduce( (acc, n) => n.price + acc,0)
// console.log(sum);

// const products = [
//   { id: 1, name: "Apple", category: "fruits" },
//   { id: 2, name: "Banana", category: "fruits" },
//   { id: 3, name: "Cucumber", category: "vegetables" },
//   { id: 4, name: "Carrot", category: "vegetables" },
//   { id: 5, name: "Milk", category: "dairy" },
// ];

// const grouped = products.reduce((acc, product) => {

//   const key = product.category;

//   if(!acc[key]){
//     acc[key] = [];
//   }
//  acc[key].push(product)

//  return acc;
// },{} )

// console.log(grouped);

// const purchases = [
//   { item: "apple", price: 30 },
//   { item: "banana", price: 10 },
//   { item: "orange", price: 20 },
// ];

// const total = purchases.reduce((acc, purchase) => purchase.price + acc, 0);

// console.log(total);

// const items = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple",
// ];


// const countItems = items.reduce((acc, item) => {
//   if( acc[item]){
//     acc[item] += 1;
//   }
//   else{ acc[item] = 1;}
//   return acc;
// }, {});

// console.log(countItems);

// const words = ["sun", "moon", "star", "sun", "star", "sun"];

// // Потрібно порахувати, скільки разів кожне слово зустрічається в масиві
// // Очікуваний результат:
// // { sun: 3, moon: 1, star: 2 }

// const countItems = words.reduce((acc, word) => {
//     if(acc[word]){
//         acc[word] += 1;
//     }
//     else {acc[word] = 1;}
//     return acc;
// }, {} )

// console.log(countItems);

// const scores = [
//   { student: "Anna", score: 10 },
//   { student: "Ivan", score: 8 },
//   { student: "Anna", score: 7 },
//   { student: "Ivan", score: 6 },
// ];

// // Потрібно обчислити загальний бал кожного студента
// // Очікуваний результат:
// // { Anna: 17, Ivan: 14 }

// const countScore = scores.reduce((acc, item) => {
//     const key = item.student
//     if(acc[key]){
//         acc[key] += item.score;
//     }
//     else{acc[key] = item.score ;}
//     return acc;
// }, {})

// const products = [
//   { id: 1, category: "fruits" },
//   { id: 2, category: "fruits" },
//   { id: 3, category: "vegetables" },
//   { id: 4, category: "dairy" },
// ];

// // Потрібно отримати масив унікальних категорій, наприклад:
// // ["fruits", "vegetables", "dairy"]

// const category = products.reduce( (acc, item) => {
//     if(!acc.includes(item.category)){
//         acc.push(item.category)
//     }
// return acc;
// }, [])

// const numbers = [2, 5, 2, 8, 5, 8, 9];
// //Треба отримати масив унікальних чисел: [2, 5, 8, 9];

// const uniqueNum = numbers.reduce((acc, n) => {
//     if(!acc.includes(n)){
//         acc.push(n)
//     }
//     return acc;
// },[])

// const people = [
//   { name: "Anna" },
//   { name: "Ivan" },
//   { name: "Anna" },
//   { name: "Oleh" },
// ];
// //Треба отримати масив унікальних імен: ["Anna", "Ivan", "Oleh"]

// const uniqueName = people.reduce((acc, h) => {
//     if(!acc.includes(h.name)){
//         acc.push(h.name);
//     }
//     return acc;
// },[]);
// console.log(uniqueName);


// // Порахуй, скільки разів кожен колір зустрічається
// const colors = ["red", "blue", "red", "green", "blue", "blue"];

// const duplicationColor = colors.reduce((acc, c) => {
//    if(acc[c]){
//     acc[c] += 1;
//    }
//    else{acc[c] = 1;}
//    return acc;
// },{}
// )
// console.log(duplicationColor);


// // Отримай масив унікальних міст
// const cities = [
//   { city: "Kyiv" },
//   { city: "Lviv" },
//   { city: "Kyiv" },
//   { city: "Odesa" },
// ];

// const uniqueCity = cities.reduce((acc, city) => {
//     if(!acc.includes(city.city)){
//      acc.push(city.city);}
//     return acc;
// },[]) 

// console.log(uniqueCity);



// // Порахуй суму цін усіх покупок
// const purchases = [
//   { item: "apple", price: 25 },
//   { item: "milk", price: 30 },
//   { item: "bread", price: 15 },
// ];

// const totalSum = purchases.reduce((acc,p) => acc + p.price, 0)
// console.log(totalSum);


// // Зроби об'єкт, де ключ — це категорія, а значення — масив продуктів у ній
// const products = [
//   { name: "Apple", category: "fruits" },
//   { name: "Banana", category: "fruits" },
//   { name: "Carrot", category: "vegetables" },
// ];

// const newObj = products.reduce((acc, item) => {
//     const key = item.category;
//     if(!acc[key]){
//         acc[key] = [];
//     }
//     acc[key].push(item.name)
//     return acc;

// },{})

// console.log(newObj);


// const products = [
//   { name: "Apple", category: "fruits", price: 25 },
//   { name: "Banana", category: "fruits", price: 15 },
//   { name: "Carrot", category: "vegetables", price: 10 },
//   { name: "Potato", category: "vegetables", price: 5 },
// ];

// const totalByCategory = products.reduce((acc, item) => {
//   const key = item.category;
//   if (!acc[key]) {
//     acc[key] = 0; // створюємо початкову суму
//   }
//   acc[key] += item.price; // додаємо ціну в категорію
//   return acc;
// }, {});

// console.log(totalByCategory);
// // { fruits: 40, vegetables: 15 }
//!=====================================================================================================================

