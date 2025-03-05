//Problem 1
//Write a function to reverse an array. 
function reverse(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

Examples:
console.log(reverse([1,2,3,4])) // [4,3,2,1]
console.log(reverse([9,9,3,4])) // [4,3,9,9]


//Problem 2
//Help fix all the bugs in the function incrementItems It is intended to add 1 to every element in the array.
function incrementItems(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}

Examples:
console.log(incrementItems([0,1,2,3])) // [1,2,3,4] 
console.log(incrementItems([2,4,6,8])) // [3,5,7,9]


//Problem 3
//Create variables a and b and assign a and b from the first and second elements from the given array using the ES6 destructuring assignment.
let arr = [1, 2, 3, 4, 5, 6];
let a = arr[0];
let b = arr[1];

Example:
console.log(arr = [1,2,3,4,5,6])   //a  1, b  2


//Problem 4
//Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}

Examples:
console.log(countTrue([true, false, false, true, false])) // 2
console.log(countTrue([false, false, false, false, false])) // 0



//Problem 5
//Create a function that takes an array of items, removes all duplicate items and return a new array in the same sequential order as the old array (minus duplicates).
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

Examples:
console.log(removeDuplicates([1,0,1,0]))//  [1,0]
console.log(removeDuplicates(["John", "Taylor", "John"]))  //(["John", "Taylor"])
//Problem 6
//Create a function that takes an array with objects and returns the sum of people’s budgets.

function getBudgets(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  return sum;
}

Examples:
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))//  65700

console.log(getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]))// 62600

//Problem 7
//Create a function that takes an array of numbers and return the sum of two lowest positive numbers.
function sumTwoSmallestPositiveNumbers(arr) {
  let positiveNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }
  }

  positiveNumbers.sort((a, b) => a - b);
  
  return positiveNumbers[0] + positiveNumbers[1];
}

Examples:
console.log(sumTwoSmallestPositiveNumbers([19,5,42,2,77])) // 7
console.log(sumTwoSmallestPositiveNumbers([2,9,6, -1])) // 8


//Problem 8
//Create a function that determines if the first array is a subset of the second.

function subset(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
}

Examples:
console.log(subset([1,3],[1,3,3,5])) // true
console.log(subset([4,8,7],[7,4,4,4,4,9,8])) // true
console.log(subset([1,3],[1,33]))  //false



//Problem 9
//Write a function that returns the unique numbers (is the number that has only one item, no duplicate)

function returnUnique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

Examples:
console.log(returnUnique([1,9,8,8,7,6,1,6]))//  [9,7]
console.log(returnUnique([5,5,2,4,4,4,9,9,1,1]))//  [2]
