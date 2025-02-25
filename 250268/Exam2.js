
// 1. Function to check if first array is not a subset of second array
function notSubsetArray(arr1, arr2) {
          return !arr1.every((element => arr2.includes(element)))
}
      console.log(notSubsetArray([-1, -2], [1, 2, 3, 4])) // true
      console.log(notSubsetArray([2, 4], [1, 2, 3, 4])) // false
      
      /* เอา arr1 ที่เป็น element ไปเช็คที่ arr2 เป็นจริงรีเทินทรู ไปเจอnot รีเทินfalse */
      function notSubsetArray1(arr3, arr4) {
          for (let i = 0; i < arr3.length; i++) {

                  if (!arr4.includes(arr3[i])) {
                    return true
                  }
          }
          return false
          
}
console.log(notSubsetArray([-1, -2], [1, 2, 3, 4])) // true
      console.log(notSubsetArray([2, 4], [1, 2, 3, 4])) // false

      
      // 2. Function to categorize dice roll outcomes
      function Roll(dice1, dice2) {
          if (dice1 === dice2) {
              return 'Jackpot' 
          }
          let sum = dice1 + dice2

          if (sum >= 7) {
              return 'High'
          } else {
              return 'Low' 
          }
      }
      
      console.log(Roll(1, 1)); // 'Jackpot'
      console.log(Roll(3, 2)); // 'Low'
      console.log(Roll(6, 5)); // 'High'
      
      
      // 3. Function to convert vowels to uppercase and others to lowercase
      function stringVowelToUpperCase(str) {
          let result = ""
          let vowels = "aeiouAEIOU"
          
          for (let i = 0; i < str.length; i++) {
              let char = str[i]
              if (vowels.indexOf(char) !== -1) {
                  result += char.toUpperCase() // ถ้าเป็นสระให้เป็นตัวใหญ่
              } else {
                  result += char.toLowerCase() // ถ้าไม่ใช่สระให้เป็นตัวเล็ก
              }
          }
          
          return result;
      }
      
      console.log(stringVowelToUpperCase('Hello World')) // 'hEllO wOrld'

      
      // 4. Function to find the most frequent number in an array
      function mostNumberInArray(arr) {
          let count = {}
          
          // นับจำนวนครั้งของแต่ละตัวเลข
          for (let i = 0; i < arr.length; i++) {
              let num = arr[i];
              if (count[num] === undefined) {
                  count[num] = 1;
              } else {
                  count[num]++;
              }
          }
      
          let maxFreq = 0;
          let maxNum = null;
          let sameFreq = false;
      
          // หาค่าที่ซ้ำมากที่สุด
          for (let num in count) {
              if (count[num] > maxFreq) {
                  maxFreq = count[num];
                  maxNum = Number(num);
                  sameFreq = false;
              } else if (count[num] === maxFreq) {
                  sameFreq = true; // ถ้ามีตัวอื่นที่ซ้ำเท่ากัน
              }
          }
      
          if (sameFreq) return 'None'; // ถ้ามีมากกว่าหนึ่งตัวที่ซ้ำเท่ากัน
          return maxNum;
      }
      
      console.log(mostNumberInArray([1, 2, 2, 3, 4, 2])); // 2
      console.log(mostNumberInArray([1, 2, 3, 4, 5])); // 'None'
      console.log(mostNumberInArray([1, 1, 2, 2, 3, 4, 5])); // 'None'