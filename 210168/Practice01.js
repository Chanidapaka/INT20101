// Problem 1 Write a function to reverse a string. The function should return the reversed string
//Example: reverseString("JavaScript")  --> "tpircSavaJ"

/* แนวคิด เริ่มจากที่เราต้องสร้างตัวแปรเพื่อมาเก็บ สตริง
ใช้การวน loop เริ่มจากตัวอักษรตัวสุดท้าย str.length - 1) แล้ววนไปจนถึงตัวแรก (i >= 0)
ในแต่ละรอบของลูป ให้เพิ่มตัวอักษร (str[i]) เข้าไปในตัวแปร reverse
หลังจากลูปเสร็จ ให้คืนค่าสตริงที่กลับลำดับแล้วออกจากฟังก์ชัน*/

function reverseString(str) {
          let reverse = ''            // สร้างตัวแปรสำหรับเก็บสตริงที่กลับลำดับ
          for (let i = str.length - 1; i >= 0; i--) { // วนลูปจากตัวอักษรตัวสุดท้ายไปหาตัวแรก
              reverse += str[i]     // เพิ่มตัวอักษรแต่ละตัวเข้าไปในตัวแปร reverse
          }
          return reverse     // คืนค่าสตริงที่กลับลำดับแล้ว
      }
      
      console.log(reverseString("JavaScript")) 
      

//Problem 02 Write a function to return an array that is rotated to the left 1 position
//Example: rotateLeft([3,5,7,9]) -->  [5,7,9,3]

/*แนวคิด ตรวจสอบความยาวของ array 
ใช้ shift() เพื่อดึงค่าตัวแรกของอาร์เรย์ออก และเก็บค่าไว้ในตัวแปร elem1
ช้ push() เพื่อเพิ่มค่าที่เก็บไว้ (elem1) เข้าไปในตำแหน่งท้ายของอาร์เรย์
//   */
function rotateArr(arr) {
          if (arr.length <= 1) { // ตรวจสอบว่าถ้าอาร์เรย์มีความยาวน้อยกว่าหรือเท่ากับ 1 ให้คืนค่าอาร์เรย์เดิม
              return arr;
          }
      
          let elem1 = arr.shift(); // นำค่าตัวแรกของอาร์เรย์ออก และเก็บไว้ในตัวแปร elem1
          arr.push(elem1); // เพิ่มค่าที่นำออกไปไว้ที่ตำแหน่งท้ายของอาร์เรย์
      
          return arr; // คืนค่าอาร์เรย์ที่ถูกหมุนแล้ว
      }
      
      let arr1 = [3, 5, 7, 9];
      console.log(rotateArr(arr1)) // ผลลัพธ์: [5, 7, 9, 3]
      
      
      function rotateArr1(arr2) { 
        let first = arr2[0]
        arr2.shift()
        arr2.push(first)
        return arr2
        }
        Console.log(rotateArr1([3,5,7,9]))
        

 //Problem 03 Write a function to return an array that is rotated to the left n position
 //Example:Example:  rotateLeft([3,5,7,9],2)  [7,9,3,5]

/*แนวคิด  อ่านตัวแรกมาเก็บไว้ แล้วshift และ put เข้าใหม่ เขียนfor loop
  */

function rotateLeft(arr, n) {
          if (arr.length <= 1 || n <= 0) {
              return arr; // ถ้าอาร์เรย์มีขนาดเล็กกว่า 2 หรือ n <= 0 ให้คืนค่าอาร์เรย์เดิม
          }
      
          n = n % arr.length // จัดการกรณีที่ n มากกว่าความยาวของอาร์เรย์
          for (let i = 0; i < n; i++) {
              let firstElement = arr.shift() // ดึงตัวแรกของอาร์เรย์ออก
              arr.push(firstElement) // เพิ่มตัวแรกที่ดึงออกไปไว้ที่ท้ายอาร์เรย์
          }
      
          return arr // คืนค่าอาร์เรย์ที่ถูกหมุนแล้ว
      }

      console.log(rotateLeft([3, 5, 7, 9], 2)); // ผลลัพธ์: [7, 9, 3, 5]
      
      

//Problem 04 Write a function that will merge two arrays and return the result as  a new array
 //Example:Example: mergeArrays([1,2,3],[4,5,6,7])  [1,2,3,4,5,6,7]

/*แนวคิด  merge คือ รวม2 Array และผลลัพธ์เป็น Array ใหม่ เป็น for loop 2 ครั้ง 
อ่าน Array = [1,2,3] และเอาค่านั้นมาput ลงArray อีกตัวนึง
*/
function mergeArrays(arr1, arr2) {
          let mergedArray = [] // สร้างอาร์เรย์ใหม่เพื่อเก็บผลลัพธ์
      
          // เพิ่มค่าจาก arr1 ลงใน mergedArray
          for (let i = 0; i < arr1.length; i++) {
              mergedArray.push(arr1[i])
          }
      
          // เพิ่มค่าจาก arr2 ลงใน mergedArray
          for (let i = 0; i < arr2.length; i++) {
              mergedArray.push(arr2[i])
          }
      
          return mergedArray // คืนค่าอาร์เรย์ใหม่ที่รวมกันแล้ว
      }
      
      console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7])) // ผลลัพธ์: [1, 2, 3, 4, 5, 6, 7]
      

//Problem 05 Write a function that will merge two arrays by alternating elements 
// – taking the first element from the first array, the second from the second array, 
// and so on – while the arrays may have different length, append the remaining elements from the longer array to the result.
 //Example:Example: mergeOneByOneArrays([1,2,3],[4,5,6,7])  [1,4,2,5,3,6,7]

/*แนวคิด  merge คือ รวม2 Array และผลลัพธ์เป็น Array ใหม่ 
1.เช็คตวามยาวของทั้ง2อัน 
2.ใช้loop เดียว เอาตัวที่มีความยาวมากกว่า loop
3.ใช้if เช็คเงื่อนไข 
*/

function mergeOneByOneArrays(arr1, arr2) {
          let mergedArray = []; // สร้างอาร์เรย์ใหม่เพื่อเก็บผลลัพธ์
          let maxLength = Math.max(arr1.length, arr2.length); // หาความยาวของอาร์เรย์ที่ยาวที่สุด
      
          for (let i = 0; i < maxLength; i++) {
              // ถ้า arr1 มีค่าในตำแหน่ง i ให้เพิ่มเข้าไปใน mergedArray
              if (i < arr1.length) {
                  mergedArray.push(arr1[i]);
              }
              // ถ้า arr2 มีค่าในตำแหน่ง i ให้เพิ่มเข้าไปใน mergedArray
              if (i < arr2.length) {
                  mergedArray.push(arr2[i]);
              }
          }
      
          return mergedArray; // คืนค่าอาร์เรย์ที่รวมกันแบบสลับ
      }
      
      console.log(mergeOneByOneArrays([1, 2, 3], [4, 5, 6, 7])); // ผลลัพธ์: [1, 4, 2, 5, 3, 6, 7]

      

//Problem 06 Write a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.  
 //Example Example: minusLeftArrays([1,2,3,10,5,3,14], [-1,4,5,6,14])  [ 1, 2, 3, 10, 3 ]

/*แนวคิด minus คือการเอา a - b เอาแต่a ไม่เอา b 
เอาArray มาเปรียบเทียบกัน ตัวไหนไม่อยู่ในb ไม่เอา
ใช้loop ในarray a และ if เพื่อเช็คว่าArray b อีกตัวนึงนั้นตรงกับArray a ไหม
อันไหนตรงก็สร้าง array ใหม่ และเอาไปเก็บไว้ในนั้น
.include
*/

function minusLeftArrays(arr1, arr2) {
          let resultArray = []; // สร้างอาร์เรย์ใหม่เพื่อเก็บผลลัพธ์
      
          for (let i = 0; i < arr1.length; i++) {
              // เช็คว่า arr1[i] ไม่มีอยู่ใน arr2
              if (!arr2.includes(arr1[i])) {
                  resultArray.push(arr1[i]); // เพิ่มค่า arr1[i] ลงใน resultArray
              }
          }
      
          return resultArray; // คืนค่าอาร์เรย์ใหม่ที่ลบค่าซ้ำออกแล้ว
      }

      console.log(minusLeftArrays([1, 2, 3, 10, 5, 3, 14], [-1, 4, 5, 6, 14]))
      

