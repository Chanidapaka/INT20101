let a = 1
console.log(a) //output: 1
console.log(typeof a) //output: number

let b = Number("1230")
let str = String(123)
console.log(typeof str) //output: string

//object 
let person = { name: 'Aom', age: 20}
let person2
console.log(typeof person) //output:object
console.log(person.name)  //outputAom
console.log(person.email) //output:undefined
console.log(person2)      //output:undefined

//Template Literals
let address = `126 Pracha Utid Rd.
Thungkru Bangmod
Bangkok`
console.log(address)

//Nullish Coalescing Operator   การทำงานของ ??
//ถ้าค่าทางซ้ายเป็น null หรือ undefined → จะคืนค่าทางขวา
//ถ้าค่าทางซ้ายไม่ใช่ null หรือ undefined → จะคืนค่าทางซ้าย
let value = null;
let result = value ?? "Default Value"
console.log(result) //output: "Default Value"

//กรณีที่ไม่ใช่ null หรือ undefined
let value1 = 42;
let result1 = value1 ?? "Default Value"
console.log(result1) //output: 42

