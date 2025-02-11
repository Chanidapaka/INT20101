/*
function valid(str) {
          if (str.length == 0){
                    return false
          }
          
          if (!((str.charAt(0) >= 'a' && str.charAt(0) <= 'z') || 
                      (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z'))){
                    return false
          }

                    for (let i = 1; i < str.length; i++){
                              const char = str.charAt(i)

                             if (char == "_") {
                               return false
                             }else (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || 
                             (char >= '0' && char <= '9'))); {
                              return false
                              }
                    }
               return true    
          }
           
console.log(valid('2aom'))
console.log(valid(' aom'))
console.log(valid('aom'))
console.log(valid('Aom'))
console.log(valid(''))
*/

//1 Write a function to check whether an input is a string or not. เช็คว่าเป็น String ไหม
function isString(input) {
          if (typeof input === "string") {
              return true  // ถ้าเป็น string ให้ return true
          } else {
              return false // ถ้าไม่ใช่ string ให้ return false
          }
      }
      
      console.log(isString('Javascript')) // true 
      console.log(isString(1234))         // false 
      console.log(isString(true))         // false 
      console.log(isString([1,2,3]))      // false 
      
//2 Write a function to split a string and convert it into an array of words
function stringToArray(str) {
          return str.split(" ") // ใช้ .split() แยกคำโดยช่องว่าง
      }
      
      console.log(stringToArray('Hello World'))      // ['Hello', 'World']

function stringToArrayy(str){
    let newWorld = ''
    let arr = []
    for (let i = 0; i < str.length; i++){
        if (str[i] != ' '&& i != str.length-1 ){
            newWorld += str[i]
        } else{
            arr.push(newWorld)
            newWorld = ''
        }
    }
    return arr
}
console.log(stringToArrayy("Hello World"))

//3 Write a function to extract a specified number of character from a string.
function stringExtract(str, num) {
          return str.slice(0, num) // ใช้ .slice() ดึงตัวอักษรจาก index 0 ถึง num
      }
      
      console.log(stringExtract('Hello World', 4))  // 'Hell'

function stringExtractt(str, num){
    let newStr = ' '
    for (let i = 0; i< num && i < str.length; i++){
        newStr += str[i]
    }
    return newStr
}
console.log(stringExtractt('Hello', 4))

//4 Write a function that takes a string with both lower case and upper case letters as parameter. It converts upper case to lower case and lower case to upper case.
function stringSwapCase(str) {
          let result = ''
          for (let i = 0; i < str.length; i++) {
              const char = str[i]
              if (char === char.toUpperCase()) {
                  result += char.toLowerCase()
              } else {
                  result += char.toUpperCase()
              }
          }
          return result
      }

      console.log(stringSwapCase('Hello World')) // 'hELLO wORLD'

//5 Write a function to concatenate a given string n times (default is 1 meaning no repeat)
function stringRepeat(str, n = 1) {
          return str.repeat(n) // ใช้ .repeat() เพื่อทำซ้ำ n ครั้ง
      }
      
      console.log(stringRepeat('Hello'))      // 'Hello'
      console.log(stringRepeat('Hello', 2))   // 'HelloHello'
      
function stringRepeatt(str, time = 1){
    let result = ''
    for (let i = 0; i < time; i++){
        result += str
    }
    return result
}
console.log(stringRepeatt('Hello', 2))

//6 Write a function to insert a string within a string at a particular position (default is 1). When the position is negative, it inserts from the end of string (position is -1).
function stringInsert(str, insertStr, position = 1) {
          if (position < 0) {
              position = str.length + position // ถ้าตำแหน่งเป็นลบ, นับจากท้ายสตริง
          }
          // หากตำแหน่งเริ่มต้นไม่ใช่ตำแหน่ง 0
          return str.slice(0, position) + insertStr + str.slice(position)
      }
      
      
      console.log(stringInsert('Hello World', 'JavaScript '))     // 'JavaScript Hello World'
      console.log(stringInsert('Hello World', 'JavaScript ', 6))  // 'Hello JavaScript World'
      console.log(stringInsert('Hello World', 'JavaScript ', -1)) // 'Hello WorldJavaScript '
      console.log(stringInsert('Hello World', 'JavaScript ', -6)) // 'Hello JavaScript World'
      
      
      
      