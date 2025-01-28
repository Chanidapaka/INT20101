//Conditional Problem
//1
function countPosSumNeg(arr) {
          // ถ้าอาร์เรย์ว่าง ให้คืนค่า []
          if (arr.length === 0) {
              return [];
          }
      
          // กำหนดตัวแปรสำหรับเก็บผลลัพธ์
          let countPositive = 0; // นับจำนวนตัวเลขบวก
          let sumNegative = 0;  // ผลรวมตัวเลขลบ
      
          // วนลูปตรวจสอบแต่ละตัวเลขในอาร์เรย์
          for (let num of arr) {
              if (num > 0) {
                  countPositive++; // ถ้าเป็นบวก เพิ่มค่าตัวนับ
              } else if (num < 0) {
                  sumNegative += num; // ถ้าเป็นลบ บวกค่าเข้า sumNegative
              }
          }
      
          // คืนค่าเป็นอาร์เรย์ [จำนวนตัวเลขบวก, ผลรวมตัวเลขลบ]
          return [countPositive, sumNegative];
      }
      
      console.log(countPosSumNeg([1, 2, 3, 4, 5, -6, -7, -8])); // [5, -21]
      console.log(countPosSumNeg([])); // []
      console.log(countPosSumNeg([0, -1, 2, -3, 4])); // [2, -4]
      
//2
function censorWords(sentence) {
          // แยกคำในข้อความ
          let words = sentence.split(" ");
      
          // ตรวจสอบคำแต่ละคำ
          let censoredWords = words.map(word => {
              if (word.length > 4) {
                  return "*".repeat(word.length); // แทนคำด้วย *
              }
              return word; // คืนคำเดิมถ้าความยาว ≤ 4
          });
      
          // รวมคำกลับเป็นข้อความ
          return censoredWords.join(" ");
      }
      
      console.log(censorWords("The code is fourty")); // "The code is ******"
      console.log(censorWords("This is fun"));        // "This is fun"
      console.log(censorWords("JavaScript is awesome")); // "********** is *******"
      
//3.
function daysInMonthOfYear(month, year) {
          // ตรวจสอบเดือนกุมภาพันธ์
          if (month === 2) {
              // เช็คปีอธิกสุรทิน
              if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                  return 29; // ปีอธิกสุรทิน
              } else {
                  return 28; // ปีปกติ
              }
          }
      
          // สำหรับเดือนอื่น ๆ
          // เดือนที่มี 30 วัน: เมษายน, มิถุนายน, กันยายน, พฤศจิกายน
          if (month === 4 || month === 6 || month === 9 || month === 11) {
              return 30;
          }
      
          // เดือนที่เหลือมี 31 วัน
          return 31;
      }
      
      console.log(daysInMonthOfYear(2, 2018)); // 28
      console.log(daysInMonthOfYear(2, 2020)); // 29
      console.log(daysInMonthOfYear(4, 2025)); // 30
      console.log(daysInMonthOfYear(7, 2023)); // 31

//4.
function validateVarName(name) {
          // ใช้ Regular Expression เพื่อตรวจสอบเงื่อนไข
          const regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
          return regex.test(name);
      }
      
      // ตัวอย่างการใช้งาน
      console.log(validateVarName("result"));        // true
      console.log(validateVarName("even number"));  // false
      console.log(validateVarName("2days"));        // false

//5.
function isSubsetArray(arr1, arr2) {
          for (let item of arr1) {
              if (!arr2.includes(item)) {
                  return false; // ถ้ามีค่าใดที่ไม่เจอใน arr2 ให้คืน false
              }
          }
          return true; // ถ้าครบทุกค่าคืน true
      }
      
      // ตัวอย่างการใช้งาน
      console.log(isSubsetArray([1, 2], [3, 5, 9, 1])); // false
      console.log(isSubsetArray([9, 3], [3, 5, 9, 1])); // true
      
//6.
function capFirstLetterOfEachWord(str) {
          return str
              .split(" ") // แยกคำด้วยช่องว่าง
              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // ตัวแรกเป็นตัวใหญ่
              .join(" "); // รวมกลับ
      }
      
      // ตัวอย่างการใช้งาน
      console.log(capFirstLetterOfEachWord("this is a title")); // "This Is A Title"

//7.
function longestWord(str) {
          return str
              .split(" ") // แยกคำด้วยช่องว่าง
              .reduce((longest, current) => current.length > longest.length ? current : longest, ""); // เปรียบเทียบความยาว
      }
      
      // ตัวอย่างการใช้งาน
      console.log(longestWord("Web Development Tutorial")); // "Development"
      
//8.
function truncateString(str, maxLength) {
          if (str.length <= maxLength) {
              return str; // ถ้าสตริงสั้นกว่าหรือเท่ากับ maxLength
          }
          return str.slice(0, maxLength) + "…"; // ตัดและเติม …
      }
      
      // ตัวอย่างการใช้งาน
      console.log(truncateString("We are doing JS string exercises.", 15)); // "We are doing JS…"
      