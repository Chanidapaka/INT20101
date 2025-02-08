//---let and String---//
/* let stars = '****'
 for(let i=0; i<4; i++){
  console.log(stars)
 } */

//----.substring----//
/* let stars = '****'
for(let i=0; i<5; i++){
  console.log(stars.substring(0, i+1))
} */

//กำหนดค่าตัวแปร เพิ่มจาก1 โดยที่+5 เข้าไป
/*let n = 1  
 n += 5
console.log(n) */

//การเปรียบเทียบ 1 //
/*let a = 2
let b = 5
let c = 1
function what_is_it(a,b,c){
          if (a > b){ //เช็ค a มากกว่า b
            let t = b
            b = a  //เอาค่า a มาเก็บใน b b= ค่ามาก
            a = t //เอาค่า t มาเก็บใน a a= ค่าน้อย
          }
          //
          if (b > c){
            let t = c
            c = b 
            b = t
          }
          if (a > b){
            let t = b
            b = a 
            a = t 
          }
          return [a,b,c]
        }
console.log(a)*/

//--2---//
/*let a = 9
let b = 5
let c = 1

          if (a > b){ 
            let t = b
            b = a  
            a = t
          }
          console.log(a,b)

          console.log(b,c)

if(b > c){
  let t = c
  c = b 
  b = t 
}

console.log(b,c)

console.log(a,b,c)

if (a > b){ 
            let t = b
            b = a 
            a = t 
          }
          console.log(a,b,c)

*/

// ---Array---//
/*let fruits = ['apple', 'banana', 'cherry', 'orange', 'stawberry']
console.log(fruits[1])

console.log(fruits.findIndex( fruit => fruit == 'orange'))

console.log(fruits.length) 

fruits.push('mango')
console.log(fruits)

fruits[0] = 'Durian'
console.log(frunts)*/

//------------Exam---------------------//
//01 Give two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan(num1, num2) {
          if (num1 + num2 < 100) {
            result = 'true';
          } else {
            result = 'false';
          }
          return result;
        }
        
        console.log(lessThan(22,15));
        console.log(lessThan(83,34));
console.log(22,15)

//02 Emmy has written a function that returns a greeting to users. However, she’s is in love with Mubashir, 
// and would like to greet him slightly differently. 
// She added a special case in her function, but she made a mistake.
function greeting(name) {
  let greet 
  if (name == "Mubashir") {
            greet = "Hello, my Love!"
  }  else {
            greet  = "Hello, " + name + "!"
  }
  return greet
}
console.log(greeting("Matt"))     //output: Hello, Matt!
console.log(greeting("Mubashir"))  //output: Hello, my Love!

//03 A vehicle needs 10 times the amount of fuel than the distance it travels. 
// However, it must always carry a minimum of 100 fuel before setting off.
//Create a function which calculate the amount of fuel it needs, given the distance. 
// If the calculated fuel is less than 100. The function must return 100 for the minimum fuel required.

function calculateFuel (distance){
          if (distance * 10 < 100) {
            result =  100
          } else {
            result = distance * 10
          }
          return result
        }
        console.log(calculateFuel(15))
        console.log(calculateFuel(23.5))
        console.log(calculateFuel(3))

//04 Write a function to revierse an array.
function reverse(var_arr) {
  let reversedArr = [] // สร้างอาร์เรย์ใหม่เพื่อเก็บค่าที่เรียงลำดับย้อนกลับ
  for (let i = var_arr.length - 1; i >= 0; i--) {
    reversedArr.push(var_arr[i]) // เพิ่มค่าจากอาร์เรย์เดิมในลำดับย้อนกลับลงในอาร์เรย์ใหม่
  }
  return reversedArr // คืนค่าอาร์เรย์ที่เรียงลำดับใหม่
}

console.log(reverse([1, 2, 3, 4])); // ➞ [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])); // ➞ [4, 3, 2, 9, 9]
console.log(reverse([])); // ➞ []

//05 Help fix all the bugs in the function incrmentItems. It is intended to add 1 to every element in the array.
function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) { // ใช้ arr.length แทน arr.size และเริ่มลูปที่ 0
    arr[i] = arr[i] + 1 // เพิ่มค่า 1 ให้กับแต่ละองค์ประกอบในอาร์เรย์
  }
  return arr // คืนค่าอาร์เรย์ที่แก้ไขแล้ว
}

console.log(incrementItems([0, 1, 2, 3])) // ➞ [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])) // ➞ [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])) // ➞ [0, -1, -2, -3]