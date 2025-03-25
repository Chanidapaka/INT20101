// Problem 1: หาค่าเฉลี่ยของตัวเลขทุกหลัก
function mean(n) {
          let sum = 0, count = 0
          while (n > 0) {
              sum += n % 10
              n = Math.floor(n / 10)
              count++
          }
          return sum / count
      }
      console.log(mean(42)) // 3
      console.log(mean(678)) // 7
      
// Problem 2: นับจำนวนค่าที่เท่ากัน
      function equal(a, b, c) {
          if (a === b && b === c) return 3
          if (a === b || a === c || b === c) return 2
          return 0
      }
      console.log(equal(3, 4, 3)) // 2
      console.log(equal(1, 1, 1)) // 3
      console.log(equal(3, 4, 1)) // 0
      
// Problem 3: สลับ camelCase และ snake_case
      function toggleCamelAndSnakeCase(str) {
          if (str.includes("_")) {
              let words = str.split("_")
              for (let i = 1; i < words.length; i++) {
                  words[i] = words[i][0].toUpperCase() + words[i].slice(1)
              }
              return words.join("")
          } else {
              let result = ""
              for (let char of str) {
                  if (char === char.toUpperCase()) {
                      result += "_" + char.toLowerCase()
                  } else {
                      result += char;
                  }
              }
              return result
          }
      }
      console.log(toggleCamelAndSnakeCase("hello_world")); // "helloWorld"
      console.log(toggleCamelAndSnakeCase("helloWorld")); // "hello_world"
      
// Problem 4: ตรวจสอบตัวประกอบของ 3 หรือ 5 เท่านั้น
      function only3Or5(n) {
          while (n % 3 === 0) n /= 3
          while (n % 5 === 0) n /= 5
          return n === 1
      }

      console.log(only3Or5(14)) // false
      console.log(only3Or5(25)) // true
      console.log(only3Or5(35)) // false
      console.log(only3Or5(7)) // false