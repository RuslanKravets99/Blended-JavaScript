Lesson-1
Task-1
// Prompt the user to enter a number using prompt().
// Store the entered value in the variable number.
// Check if the variable number is equal to 10:
// If so, print the message 'True' in alert().
// If not, print 'False'.

// Hint: prompt always returns a string, so before checking,
// convert the value to a number using Number().
Task-2
// The variable min contains a random number from 0 to 59.
// Determine which quarter of an hour this number falls into (first, second, third, or fourth).
// Print the appropriate message in alert, for example:
// "10 falls into the first quarter"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
Task-3
// The variable num can take on 4 values: '1', '2', '3' or '4'
// (ask the user for this value via prompt).
// If it has the value '1', then write 'winter' in the variable result,
// if it has the value '2' - 'spring' and so on.
// Solve the problem using switch-case.
// Don't forget about the default value, in case the user
// enters something else into the prompt. In this case, result should take on the value:
// "Sorry, but you must enter a value from 1 to 4 inclusive".
// Output the value of the variable result to the console.

Task-4
// Receive a number (number of minutes) from the user via prompt
// and output a string to the console in the format of hours and minutes.
// Example: the user enters '70' into the prompt -> '01:10' will be displayed in the console.
// Useful link for displaying hours and minutes in the desired format ('01' instead of '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

Task-5
// Write code that will prompt the user for
// login using the prompt and output the result to the browser console

// Then add a validation of the value entered by the user:
// If the visitor enters "Admin",
// then the prompt asks for a password (don't forget to save it in a variable for later verification).
// If nothing is entered or Cancel is pressed,
// Output the line "Cancelled" to the alert
// Otherwise, output the line "I don't know you" to the alert
// Check the password like this:
// If the password entered is "I am the administrator",
// then output the line "Hello!" to the alert,
// otherwise, output the line "Incorrect password!" to the alert

Task-6
// Use a while loop to print all numbers from 0 to 20 inclusive to the console.

Task-7
// Write a function getNumbers(min, max) that takes 2 parameters -
// the minimum and maximum number respectively.
// Write a loop inside the function that prints to the console
// all numbers from max to min in descending order.
// Also, calculate the sum of all even numbers in this loop
// and return it from the function.

Task-8
// Write a function min(a, b) that takes 2 numbers and returns the smaller of them.
// You need to add a check that the function receives exactly numbers, otherwise
// return a string from the function - 'Not a number!'.

Task-9
// Write a function isAdult(age), which takes a number - the user's age and returns true,
// if the parameter age is greater than or equal to 18.
// Otherwise, it requests confirmation via confirm
// and returns its result (true/false).

Task-10
// Write a function fizzBuzz(num), which takes a number and checks each number from 1 to num:
// If the number is divisible by 3 without a remainder - output to the console 'fizz',
// if it is divisible by 5 without a remainder - output to the console 'buzz',
// if it is divisible by both 3 and 5 without a remainder - output to the console 'fizzbuzz'.

Leson-2

//Task-1

// Create an array styles with the elements 'jazz' and 'blues'
// Add the element 'rock-n-roll' to the end of the array using the appropriate array method
// Find the element 'blues' in the array and replace it with 'classic' using JavaScript

// Write a function logItems(array) that takes the array as an argument
// and prints each element to the console in the format:
// "<element number> - <element value>".
// Use a for loop to iterate through the elements of the array.
// The elements must be numbered starting from 1 (not 0).

//Task-2

// Write a function checkLogin(array) that:
// Takes an array of logins as an argument.
// Asks for the username via prompt.
// Checks if the entered name is in the passed array.
// If the name is in the array – displays a message via alert: "Welcome, <name>!"
// If the name is missing – displays a message: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

//Task-3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

//Task-4

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

//Task-5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//Task-6

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

//Task-7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//Task-8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//Task-9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

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
