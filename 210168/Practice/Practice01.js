// Problem 1 Write a function to reverse a string. The function should return the reversed string
//Example: reverseString("JavaScript")  --> "tpircSavaJ"

/* แนวคิด
เอามาต่อกัน คือ ("J"+"a")
อ่านจากด้านหน้ามาด้านหลัง คือ (Javascript"[0])
อ่านจากด้านหลัง คือ (Javascript"["Javascript".lenght])

 */

// function reverseString(str) {
//           let  reverse = '' 

          
          
// }

//Problem 02 Write a function to return an array that is rotated to the left 1 position
//Example: rotateLeft([3,5,7,9]) -->  [5,7,9,3]

/*แนวคิด อ่านตัวแรกมาเก็บไว้ แล้วshift และ put เข้าใหม่
  */
function rotateArr(arr) {
          if (arr.length <= 1) {
                    return arr;
                }
  
                let elem1 = arr.shift();
                arr.push(elem1);
            
                return arr;
            }
            let arr1 = [3,5,7,9];
            
            
            console.log(rotateArr(arr1));

 //Problem 03
 //Example:

/*แนวคิด  อ่านตัวแรกมาเก็บไว้ แล้วshift และ put เข้าใหม่ เขียนfor loop
  */

//Problem 04
 //Example:

/*แนวคิด  merge คือ รวม2 Array และผลลัพธ์เป็น Array ใหม่ เป็น for loop 2 ครั้ง 
อ่าน Array = [1,2,3] และเอาค่านั้นมาput ลงArray อีกตัวนึง
*/

//Problem 05
 //Example:

/*แนวคิด  merge คือ รวม2 Array และผลลัพธ์เป็น Array ใหม่ 
1.เช็คตวามยาวของทั้ง2อัน 
2.ใช้loop เดียว เอาตัวที่มีความยาวมากกว่า loop
3.ใช้if เช็คเงื่อนไข 
*/

//Problem 06
 //Example:

/*แนวคิด minus คือการเอา a - b เอาแต่a ไม่เอา b 
เอาArray มาเปรียบเทียบกัน ตัวไหนไม่อยู่ในb ไม่เอา
ใช้loop ในarray a และ if เพื่อเช็คว่าArray b อีกตัวนึงนั้นตรงกับArray a ไหม
อันไหนตรงก็สร้าง array ใหม่ และเอาไปเก็บไว้ในนั้น
.include
*/




