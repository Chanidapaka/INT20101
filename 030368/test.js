x = 3
console.log(x) //output 3

y = 1
o = "1"
console.log(y == o) //output true
console.log(y === 0) //output false


//String
const str = " Hello "
console.log(str.trim()) //output Hello

const str1 = "love"
console.log(str1.indexOf()) //output -1

const str2 = "aom"
console.log(str2.includes("a")) //output true

const str3 = "love"
console.log(str3.slice(1)) //output ove

const str5 = "love, you"
console.log(str5.split()) //output [ 'love, you' ]

function getFullName(firstName, lastName) {
  return firstName + lastName
}
console.log(getFullName("Johe", "Na")) //output JoheNa

function upperCase(str6) {
  return str6.toUpperCase() 
}
console.log(upperCase("Aom")) //output AOM

function lowerCase(str6) {
  return str6.toLowerCase()
}
console.log(lowerCase("Aom")) //output aom

//if-else && if-else if
function checkSen(sen) {
  if(sen.includes("error")){
    return "พบข้อผิดพลาด"
  }else{
    return "ไม่พบข้อผิดพลาด"
  }
}
console.log(checkSen("error")) //output พบข้อผิดพลาด
console.log(checkSen("e")) //output ไม่พบข้อผิดพลาด

//for loop
for (let i = 0; i < 20; i++) {
  console.log(i) //output 0-19
}

function numMod(num) {
  for (let i = 0; i < 20; i++) {
    if (num % 2 === 0) {
      console.log(num) //output 2-20
    } 
    num++
  }
}
numMod(2) 

//Array
let arr = ["X", "Y", "Z"]
console.log(arr.length) //output 3

let str7 = ""

for (let i = 0; i < arr.length; i++) {
  console.log(str7 += arr[i]) //output X Y Z
}
console.log("finalString: " + str7)

//2
let arr1 = [5, 10, 15, 20, 25, 30]
let sum = 0

for (let i = 0; i < arr1.length; i++) {
   sum += arr1[i]
}
console.log("finalSum: " + sum)

//object
let obj = {
  name : "Aom",
  age : 20
}
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.name + " " + obj.age)

  




        
        