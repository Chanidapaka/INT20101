//Problem 1
//Write a function that takes a string as an argument. The function returns a string that is sorted by alphabet order.
function sortAlphabetFromString(str) {
          return str.split('').sort().join('');
      }
      
      console.log(sortAlphabetFromString("hello")); // "ehllo"
      console.log(sortAlphabetFromString("world")); // " dlorw"


//Problem 2
//Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(sentence) {
          let count = 0;
          let inWord = false;
          
          for (let i = 0; i < sentence.length; i++) {
              if (sentence[i] !== ' ' && !inWord) {
                  count++;
                  inWord = true;
              } else if (sentence[i] === ' ') {
                  inWord = false;
              }
          }
          return count;
      }      
      
      console.log(countWords("Just an example here move along")); // 6
      console.log(countWords("This is a test")); // 4

//Problem 3
//Create a function that counts the number of capital letters in a string as an argument.
function capitalLetters(str) {
          let count = 0;
          for (let i = 0; i < str.length; i++) {
              if (str[i] >= 'A' && str[i] <= 'Z') {
                  count++;
              }
          }
          return count;
      }
      
      console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); // 6
      console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // 0

//Problem 4
//Create a function that takes a string and return the middle character(s). If the word’s length is odd, return the middle character. If the word’s length is even, return the middle two characters.
function middleCharacter(str) {
          let len = str.length;
          let mid = Math.floor(len / 2);
          return len % 2 === 0 ? str[mid - 1] + str[mid] : str[mid];
      }
      
      console.log(middleCharacter("testing")); // "t"
      console.log(middleCharacter("middle")); // "dd"
