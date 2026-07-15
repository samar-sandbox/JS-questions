/**
 * Problem 1
 * Convert the string "123" to a number and add 7
 */
function convertStringToNumberPlusSeven(str) {
  const num = Number(str);

  if (!isNaN(num)) {
    return num + 7;
  }

  return "Invalid number";
}
console.log(convertStringToNumberPlusSeven("123"));

/**
 * Problem 2
 * Check if the given variable is falsy and return "Invalid" if it is
 */
function isFalsy(value) {
  return !value ? "Invalid" : value;
}
console.log(isFalsy(0));

/**
 * Problem 3
 * Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
 */
function printOddNumbersFromOneToTen() {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    result.push(i);
  }

  console.log(result.join(", "));
}
printOddNumbersFromOneToTen();

/**
 * Problem 4
 * Create an array of numbers and return only the even numbers using filter method
 */
function getEvenNumbers(arr) {
  return arr.filter((n) => n % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5]));

/**
 * Problem 5
 * Use the spread operator to merge two arrays, then return the merged array
 */
function mergeTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeTwoArrays([1, 2, 3], [4, 5, 6]));

/**
 * Problem 6
 * Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday)
 */
function getTheDay(dayNum) {
  switch (dayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log(getTheDay(2));

/**
 * Problem 7
 * Create an array of strings and return their lengths using map method
 */
function getStringLengths(strArr) {
  return strArr.map((str) => str.length);
}
console.log(getStringLengths(["a", "ab", "abc"]));

/**
 * Problem 8
 * Write a function that checks if a number is divisible by 3 and 5
 */
function checkDivisibilityByThreeAndFive(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else if (num % 3 === 0) {
    return "Divisible by 3";
  } else if (num % 5 === 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible by 3 or 5";
  }
}
console.log(checkDivisibilityByThreeAndFive(15));

/**
 * Problem 9
 * Write a function using arrow syntax to return the square of a number
 */
const squareNumber = (num) => num * num;
console.log(squareNumber(5));

/**
 * Problem 10
 * Write a function that destructures an object to extract values and returns a formatted string
 */
function formatPersonObj({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(formatPersonObj({ name: "John", age: 25 }));

/**
 * Problem 11
 * Write a function that accepts multiple parameters (two or more) and returns their sum
 */
function sum(...nums) {
  return nums.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

/**
 * Problem 12
 * Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
 */
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
resolvedPromise().then((message) => {
  console.log(message);
});

/**
 * Problem 13
 * Write a function to find the largest number in an array
 */
function findMax(arr) {
  let max = arr[0];

  arr.forEach((n) => {
    if (n > max) max = n;
  });

  return max;
}
console.log(findMax([1, 3, 7, 2, 4]));

/**
 * Problem 14
 * Write a function that takes an object and returns an array containing only its keys
 */
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({ name: "John", age: 30 }));

/**
 * Problem 15
 * Write a function that splits a string into an array of words based on spaces
 */
function splitString(str) {
  return str.split(" ");
}
console.log(splitString("The quick brown fox"));
