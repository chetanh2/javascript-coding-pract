// console.log("tssss");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const IndiaData = describeCountry("India", 141.72, "Delhi");
// console.log(IndiaData);

// let admin
// let name = "John"
//     admin = name

//     alert(admin)

const Planet = "earth";

// ?

// const birthday = '18.04.1982';

// const age = someCode(birthday);

// ? Prompt

// let age = prompt('How old are you?',60);

// alert(`You are ${age} years old!`);

// ? confirm

// let isBoss = confirm("Are you the boss?");

// alert( isBoss );  // true if OK is pressed

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

function reverseAString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseAString("chetan"));

// check if num is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Output: true

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

// function findMax(arr) {
//     if (arr.length === 0) return undefined; // Handle edge case for empty array
//     let max = arr[0]; // Initialize max with the first element of the array
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([1, 2, 3, 4, 5]));

function findmax(arr) {
  let max = arr;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(
  findMax([1, 2, 3, 4, 15, 45, 34, 12, 56, 34, 23, 23, 23, 67, 89, 676])
);
// Initialization: Start by assuming the first element of the array is the largest (max = arr[0]).
// Loop through the array: Use a for loop to iterate through the array, starting from the second element (i = 1).
// Update max: If the current element is greater than the max, update max.
// Return the result: After the loop completes, max will hold the largest value in the array.
// Edge case: If the array is empty, return undefined.

// Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(
  removeDuplicates([1, 2, 2, 3, 4, 4, 45, 45, 45, 32, 32, 32, 89, 76, 89])
); // Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(
  removeDuplicates([1, 2, 2, 3, 4, 4, 45, 45, 45, 32, 32, 32, 89, 76, 89])
);
// indexOf Method:

// It checks if the current element is already in the result array using indexOf.
// If not found (-1), it gets added to the result.

function removeDuplicates(arr) {
  let uniqueElements = [];
  for (let elem of arr) {
    if (!uniqueElements.includes(elem)) {
      uniqueElements.push(elem);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); 
