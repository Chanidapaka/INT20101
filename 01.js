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
let fruits = ['apple', 'banana', 'cherry', 'orange', 'stawberry']
console.log(fruits[1])

console.log(fruits.findIndex( fruit => fruit == 'orange'))

console.log(fruits.length) 

fruits.push('mango')
console.log(fruits)