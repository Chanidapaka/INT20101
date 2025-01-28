//01 Write a function to reverse a number
// วิธีที่1 
function reverse(num) {
          let reverseNum = [];
          let nums = num.toString().split("") // แปลงตัวเลขเป็นสตริงแล้วแยกเป็นอาร์เรย์
      
          for (let i = nums.length - 1; i >= 0; i--) {
              reverseNum.push(nums[i]) // เพิ่มตัวอักษรที่กลับด้านเข้าไปใน reverseNum
          }
          return Number(reverseNum.join("")) // รวมกลับเป็นสตริงและแปลงเป็นตัวเลข
      }
      console.log(reverse(123456)) // ผลลัพธ์: 654321

// วิธีที่2
function reverses(num) {
          return parseInt(num.toString().split("").reverse().join(""));
      }
      console.log(reverses(123456))  //output:654321

//วิธีที่3
function reverse(num) {
          let reversed = "" // เก็บตัวเลขที่กลับด้านในรูปแบบสตริง
          let strNum = num.toString() // แปลงตัวเลขเป็นสตริง

          for (let i = strNum.length - 1; i >= 0; i--) {
              reversed += strNum[i] // เพิ่มตัวอักษรจากท้ายสุดไปต้นสุด
          }

          return parseInt(reversed) // แปลงกลับเป็นตัวเลข
      }
      
      // ตัวอย่างการใช้งาน
      console.log(reverse(123456))  //output:654321

      

//Number to String
let strnum = String(123)
console.log(strnum.length) //output:3
let num = Number(strnum)
console.log(num)   //output:123
console.log(typeof num)  //output:number


      

