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






