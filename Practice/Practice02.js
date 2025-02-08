// console.log
console.log("John Doe")
console.log(19)
console.log("student")

//variable
var message = "Hello World!"
console.log(message)

var message = "Nice weather!"
console.log(message)

let myAwesomeVariable = "Aom"  //Camel case
let my_awesome_variable = "aom" //snak case
console.log(myAwesomeVariable)
console.log(my_awesome_variable)

const fileSizeLimit = 2000
console.log(fileSizeLimit)

//let ไม่สามารถเปลี่ยนแปลงค่าได้
//let world = "ice"
//let world = "78" 

//const ไม่สามารถเปลี่ยนค่าได้
//const world = "ice"
//const world = "78"

//var สามารถเปลี่ยนค่าได้ถ้าตัวแปรเดียวกัน
var world = "ice"
var world = 78
console.log(world) //output: 78

// var in if
if(true){
          var name = "Nathan"
}
console.log(name)

// let in if
// if(true){
//           let names = "Nathan"
// }
// console.log(names) //error

//Exercise
let firstVariable = "Chanidapa"
let secondVariable = 20
let thirdVariable = "student"

console.log(firstVariable)  //output: Chanidapa
console.log(secondVariable) //output: 20
console.log(thirdVariable)  //output: student

//Data Type หัวข้อใหญ่
console.log(2+2)   //output:4

console.log(2 + "ABC") //output: 2ABC

//--String--- หัวข้อรองลงมา
let messagee = "Hello, Chanidapa!"
console.log(messagee)

// plus symbol 
let messages = "Hello" + " " + "and" + " " + "Goodbye!"
console.log(messages)

// multiple strings
let messagess = "Hello, Aom!"
console.log("The message is:" + messagess)

let score = "10" + "20"
console.log(score) //output: 1020
console.log(typeof score) //output: string

let score2 = 10 + 20
console.log(score2) //output:30
console.log(typeof score2) //output: number

//backtick
let namee = "Aom"
let topic = "JavaScript"
console.log(`${namee} is learning ${topic} today`)

//--Number มีแค่ Integers(จำนวนเต็ม) and Floats(ทศนิยม)
let x = 1
let y = 2
console.log(x + y) //output: 3

let f = 1.2
let z = 2.35
console.log(f + z) //output:3.55

//-- Booleans
let on = true
let off = false

//-- Undefined คือยังไม่ได้ Assign ค่าลงไป
let first_name 
console.log(first_name) //output: undefined

//or
let last_name = undefined
console.log(last_name) //output: undefined

//Null ประกาศว่า เป็นค่า empty or unknown 
let first_namee = null
console.log(first_namee)  //output: null

//Type Conversion (การแปลงประเภทแบบชัดเจน - Explicit)
let a = "7"
let b = 5
console.log(a + b) //output: 75
console.log(typeof a + b) //output: string 
//เพราะมันโดนแปลงค่าอัตโนมัติ(Coercion) ก่อนที่ b จะเอาค่านั้นมา + ได้ทำการแปลงเป็น string ก่อนที่จะเอาค่านั้นมาบวก

// string to int()
let c = "7"
let d = 5

//convert c to integer
c = Number(c)
console.log(typeof c + d) //output:number

//convert d to string
d = String(d)
console.log(d) //output: 5
console.log(typeof d) //output: string

//convert c to boolean: true
c = Boolean(c)
console.log(c) //output true

//convert d to boolean: false
d = !Boolean(d)
console.log(d) //output false

//Type Coercion (การแปลงประเภทแบบอัตโนมัติ - Implicit)
console.log(1 + "1") //output: 11 (การ + กันแบบ string)
console.log(1 + Number("1")) //output: 2 (การ + กันแบบ number)

//Type coercion rules
console.log(1 + "1")  //11
console.log([1 + 2] + "1") //31
console.log(true + "1") //true1

console.log({a: 1} + "1")  //"[object Object]1"
console.log("1" + { a:1 }) //"1[object Object]"
console.log(true + { a:1 }) //"true[object Object]"
console.log({ a: 1} + 1)   // "[object Object]1"

//Operators
//--Arithmetic operators (mathematical)
console.log(10 + 3) //Addition (การบวก)
console.log(2 - 4) //Subtraction (การลบ)
console.log(5 * 7) //Multplication (การคูณ)
console.log(1 ** 2) //Exponentiation (การคูณ2ตัว)
console.log(2 / 8) //Divisiontion (การการ)
console.log(2 % 100) //Remainder (การหารเปอร์เซน)
//console.log(9++) //Increment (การทำบวกไปเรื่อยๆ)
//console.log(7--) //Decrement (การทำลบไปเรื่อยๆ)





