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

//1
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
      
//2
function stringToArray(str) {
          return str.split(" ") // ใช้ .split() แยกคำโดยช่องว่าง
      }
      
      console.log(stringToArray('Hello World'));      // ['Hello', 'World']

//3
function stringExtract(str, num) {
          return str.slice(0, num) // ใช้ .slice() ดึงตัวอักษรจาก index 0 ถึง num
      }
      
      console.log(stringExtract('Hello World', 4))  // 'Hell'

//4
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

//5
function stringRepeat(str, n = 1) {
          return str.repeat(n) // ใช้ .repeat() เพื่อทำซ้ำ n ครั้ง
      }
      
      // ✅ ทดสอบการทำงาน
      console.log(stringRepeat('Hello'))      // 'Hello'
      console.log(stringRepeat('Hello', 2))   // 'HelloHello'
      
//6
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
      
      
      