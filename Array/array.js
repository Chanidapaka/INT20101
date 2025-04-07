
//forEach() – วนลูปใน Array
const fruits = ['apple', 'banana', 'cherry']

fruits.forEach((Element) => console.log(Element)) 


//find() – หาค่าตัวแรกที่ตรงเงื่อนไข
const numbers = [10, 15, 25, 30];

function isGreaterThan20(num) {
  return num > 20;
}

const result = numbers.find(isGreaterThan20);

console.log(result); // 25


//filter() – กรองข้อมูลตามเงื่อนไข
const numbers2 = [1, 2, 3, 4, 5];
function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // [2, 4]

//map() – สร้าง Array ใหม่จากการแปลงค่า
const numbers3 = [1, 2, 3];

function square(num) {
  return num * num;
}

const squared = numbers.map(square);

console.log(squared); // [1, 4, 9]

//reduce() – รวมค่าทั้ง Array ให้เป็นค่าเดียว
const nums1 = [1, 2, 3, 4];

function add(total, current) {
  return total + current;
}

const sum = numbers.reduce(add, 0);

console.log(sum); // 10


//slice(start, end) – ตัด Array บางส่วน
const letters = ['a', 'b', 'c', 'd'];

const sliced = letters.slice(1, 3); // เริ่มที่ index 1 ถึงก่อน index 3
console.log(sliced); // ['b', 'c']

//splice(start, deleteCount, ...items) – ลบ/เพิ่ม ค่าใน Array
const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y');
console.log(arr); // ['a', 'x', 'y', 'd']


//push() / pop() – เพิ่ม/ลบ ด้านท้าย
const items = [1, 2, 3];
items.push(4);  // [1, 2, 3, 4]
items.pop();    // [1, 2, 3]

//unshift() / shift() – เพิ่ม/ลบ ด้านหน้า
const nums = [2, 3, 4];
nums.unshift(1); // [1, 2, 3, 4]
nums.shift();    // [2, 3, 4]

//sort() – เรียงลำดับ
const numbers4 = [10, 5, 1];

function compareNumbers(a, b) {
  return a - b; // น้อยก่อนมาก
}
numbers4.sort(compareNumbers);
console.log(numbers4); // [1, 5, 10]



