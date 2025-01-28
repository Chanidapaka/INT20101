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
Bakok`
console.log(address)