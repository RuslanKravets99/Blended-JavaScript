//Task-1

let enterNumber = prompt("Enter a number from 1 to 10 ");
while (parseInt(enterNumber) !== 10) {
    alert("Incorrect");
    enterNumber = prompt("Try again enter a number from 1 to 10 ")
};
alert("Correct");

//Task-2

const min = Math.floor(Math.random() * 60);
if (min < 15) {
alert( `${min} enters the first quarter`)
} 
else if (min < 30) {
  alert( `${min} enters the second quarter`)  
}
else if (min < 45) {
  alert( `${min} enters the third quarter`)  
}
else {alert( `${min} enters the fourth quarter`)}

//Task-3

let num = prompt("Enter number from 1 to 4");
num = parseInt(num);
let result;
switch (num) {
    case 1:
        result = "winter";
        console.log(result);
        break;
    case 2:
        result = "spring";
        console.log(result);
        break;
    case 3:
        result = "summer";
        console.log(result);
        break;
    case 4:
        result = "fall";
        console.log(result);
        break;

    default: 
    result = "Sorry, but you must enter a value between 1 and 4 inclusive";
    console.log(result);

        break;
}

//Task-4

const input = prompt("Enter any number of minutes");
const totalMinutes = parseInt(input);

const getHours = Math.floor(totalMinutes / 60);
const minutesLeft = totalMinutes % 60;

const formatTime = `${String(getHours).padStart(2, "0")}:${String(minutesLeft).padStart(2, "0")}`;
console.log(formatTime);

//task-5

const login = prompt("Enter login");

if (login === "Admin") {
    const password = prompt("Enter password");

    if (password === "I-am-boss") {
        alert("Good afternoon");
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Incorrect password");
    }

} else if (login === "" || login === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

//task-6

let count = 0;
while (count <= 20) {
    console.log(count)
    count += 1
}

//task-7

function getNumbers(min, max) {
    let totalNum = 0;
    for (let index = max; index >= min; index--) {
        if(index % 2 === 0)
        {totalNum += index}
    }
    return totalNum
}
console.log(getNumbers(1, 10));

//task-8

function minimal(a, b){
    if( typeof a !== "number" || typeof b !== "number"){
        return "Not a number"
    }
    return a < b ?  a : b;
}
console.log(minimal(5,6));
console.log(minimal(7,4));
console.log(minimal("1", 6));
console.log(minimal(1, "5"));

//task-9

function  isAdult(age){
     if (age >= 18) {
        return true;
    } else {
        return confirm("You are not yet 18. Are you sure you want to continue?");
    }
}
console.log(isAdult(18));
console.log(isAdult(16));

//task-10

function fizzBuzz(num) {
        for (let number = 1; number <= num; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("fizzbuzz");
        } else if (number % 3 === 0) {
            console.log("fizz");
        } else if (number % 5 === 0) {
            console.log("buzz");
        }
    }
}
