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
//01 มีif elese
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

//02 if ชื่ออื่นให้Hello ถ้าเป็นชื่อนนี้ให้แสดง My love
function greeting(name) {
          if(name == "Mubashir") {
                      return "Hello, my Love!";
          }else{
    return "Hello,Matt!";
  }
}

console.log(greeting("Matt"));
console.log(greeting("Mubashir"));

//03
function calculateFuel (distance){
          if (distance * 10 <= 100) {
            result =  100
          } else {
            result = distance * 10
          }
          return result
        }
        console.log(calculateFuel(15))
        console.log(calculateFuel(23.5))
        console.log(calculateFuel(3))

//04
let arr = [1,2,3,4]

function revierse (var_arr){
  for(let i=var_arr.length-1; i>=0; i--){
    console.log(var_arr[i])
  }
}

revierse(arr)

let arr1 = [9,9,2,3,4]

function revierse1 (var_arr1){
  for(let i=var_arr1.length-1; i>=0; i--){
    console.log(var_arr1[i])
  }
}

revierse1(arr1)


let arr2 = ['[]']

function revierse2 (var_arr2){
  for(let i=var_arr2.length-1; i>=0; i--){
    console.log(var_arr2[i])
  }
}

revierse1(arr2)