let a = 1
console.log(a=1)    //output: 1     การกำหนดค่า
console.log(a==1)   //output: true  คนละชนิด ค่าเดียวกัน 
console.log(a===1)  //output: true  ประเภทเดียวกัน ค่าเดียวกัน

let b = '1'
console.log(typeof b)  //output: string
//console.log(b=1)    //output: 1     การกำหนดค่า
console.log(typeof b)  //output: number
console.log(b==1)   //output: true  คนละชนิด ค่าเดียวกัน 
console.log(b===1)  //output: true  ชนิดเดียวกัน ค่าเดียวกัน //เอาที่กำหนดค่าออก --> output: false

//Conditionals // if เมื่อต้องการเช็คเงื่อนไข
if('true'){
          console.log('It is true') //output: It is true
}

if('false'){
          console.log('It is true') //output: It is true
}

if(true){
          console.log('It is true') //output: It is true
}

if(false){
          console.log('It is true') //output: ไม่พิมพ์
}

if(!false){
          console.log('It is true') //output: It is true
}

//01.if/else
if (true) {
          console.log('It is true') //output: It is true
} else {
          console.log('It is false') 
}

//02.
if (false) {
          console.log('It is true') 
} else {
          console.log('It is false') //output: It is  false
}

//03. undefined, '' , 0 = false   // 1 = true  
let bolCheck
if(bolCheck){
          console.log('It is true.')
}

let bolCheck2 = 1
if(bolCheck2){
          console.log('It is true.')
}


      