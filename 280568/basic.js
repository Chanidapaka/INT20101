// const { forwardRef } = require("react");

// //1.
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"))
// console.log(reverseString("hello word"))

// function reverseStringg(myString) {

// let original =  myString.split('')
// let char = original.shift()
// original.push(char)
// return rotatedString = original.join('')

// }

// console.log(reverseStringg("word")) // ผลลัพธ์: "ordw"

// function findLongestWord(sentence) {
//           let words = sentence.split(' ').filter(word => word !== '')

//           let longest = ""

//           for (let i = 0; i < words.length; i++) {
//                     const currentWord = words[i];

//                     if (currentWord.length > longest.length) {
//                               longest = currentWord
//                     }
                    
//           }
//           return longest
    
// }

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // ผลลัพธ์: "jumps"
// console.log(findLongestWord("Google Development Academy"))

// function countVowels(str) {
//           let words = str.split('')

//           let vowels = 0

//           for (let i = 0; i < words.length; i++) {
//                     const newWord = words[i];
                    
//                     const loweCase = newWord.toLowerCase()

//                     switch (loweCase) {
//                               case "a":
//                               case "e":
//                               case "i":
//                               case "o":
//                               case "u":
//                                         vowels++
//                                         break;
//                     }
                    
//           }
//           return vowels
// }
// console.log(countVowels("Hello World"))
// console.log(countVowels("JavaScript"))
// console.log(countVowels("Rhythm"))


// function areAnagrams(str1, str2) {
//               function cleanAndSortString(str) {
        
//         const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
//         return cleanedStr.split('').sort().join('');
//     }

//     // 1. ทำความสะอาดและจัดเรียงสตริงแรก
//     const cleanedAndSortedStr1 = cleanAndSortString(str1);
    
//     // 2. ทำความสะอาดและจัดเรียงสตริงที่สอง
//     const cleanedAndSortedStr2 = cleanAndSortString(str2);

//     // 3. เปรียบเทียบสตริงที่จัดเรียงแล้วทั้งสอง
//     //    ถ้าเหมือนกัน แสดงว่าเป็น Anagrams
//     return cleanedAndSortedStr1 === cleanedAndSortedStr2;
// }
// console.log(areAnagrams("listen", "silent"))
// console.log(areAnagrams("hello" ,"world" ))
// replace(/[^a-z0-9]/g)


function sumEvenNumbers(numbers) {
          let newNum = 0

          for (let i = 0; i < numbers.length; i++) {
                    const element = numbers[i];

                    if (element % 2 === 0) {
                              newNum += element
                    }
                    
          }
          return newNum
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])) 
console.log(sumEvenNumbers([10, -3, 8, 0, -1, 7])) 
console.log(sumEvenNumbers([1, 3, 5, 7])) 
