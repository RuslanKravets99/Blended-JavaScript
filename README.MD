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