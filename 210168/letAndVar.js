/*//การใช้ let ในscope ของตัวเอง --Block Scope--- //
let num = 1
let sum = 0
if(sum==0){
  let num = 2
}
console.log(sum) //output:0

function add(num, num2){
  let sum = num+num2
  console.log(sum) //output:3
  return sum
}

add(1,2)

console.log(sum) //output:0 */

/*//var จะประกาศกี่ครั้งก็ได้ --function Scope---
var num = 1
var sum = 0
var num = 2
if(sum==0){
  let num = 2
}
console.log(sum) //output:0

function add(num, num2){
  var sum = num+num2
  console.log(sum) //output:3
  return sum
}

add(1,2)

console.log(sum) //output:0  */

/*// ไม่แนะนำที่จะใช้ เพราะว่า มันสามารถประกาศตัวแปรซ้ำไปเรื่อยๆได้
var num = 1
var sum = 0
var num = 2
if(sum==0){
  let num = 2
}
console.log(sum) //output:0

if(num==2){
  var sum = 3
  console.log(sum) //output:3
}

console.log(sum) //output:3  */

// undefined เพราะเราไม่ได้ประกาศค่า 
//ถ้าเราไม่ได้ประกาศ แดละไปประกาศตอนลัง ตอนต้นจะออกมาเป็น  undefined 
var num = 1
var num = 2
if(sum==0){
  let num = 2
}
console.log(sum) //output:undefined 

if(num==2){
  var sum = 3
  console.log(sum) //output:3
}

console.log(sum) //output:3
