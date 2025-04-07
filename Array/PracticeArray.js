// //1.
// function reverse(arr1){
//           return arr1.reverse()
// }
// console.log(reverse([1,2,3,4]))
// console.log(reverse([9,9,3,4]))

// function incrementItem(arr2) {
//           let result = []
//           for (let i = 0; i < arr2.length; i++) {
//                     result.push(arr2[i] +1)
                    
//           }
//           return result
// }
// console.log(incrementItem([0,1,2,3]))
// console.log(incrementItem([2,4,6,8]))

// const arr3 = [1,2,3,4,5,6]
// const [a,b] = arr3

// console.log(a)
// console.log(b)

// function countTrue(arr4) {
//           let count = 0 
//           for (let i = 0; i < arr4.length; i++) {
//                     if (arr4[i] === true) {
//                               count++
//                     }
                    
//           }
//           return count
// }
// console.log(countTrue([true, false, false, true, false]))
// console.log(countTrue([false, false, false, false, false]))

// function removeDuplicates(arr5) {
//           let result = []
//           for (let i = 0; i < arr5.length; i++) {
//                     if (!result.includes(arr5[i])) {
//                               result.push(arr5[i])      
//                     }
                    
//           }
//           return result
// }
// console.log(removeDuplicates([1,0,1,0])) 
// console.log(removeDuplicates(["John", "Taylor", "John"]))

// function getFirst(arr6){
//           return arr6[0]

// }
// console.log(getFirst([10,20,30]))

// function arrayLength(arr7){
//          return arr7.length
// }
// console.log(arrayLength(["a", "b", "c"]))

// function containsValue(arr8, value) {
//           return arr8.includes(value)
          
// }
// console.log(containsValue([1,2,3], 2))
// console.log(containsValue([1,2,3], 5))

// function reverseArray(arr9) {
//           return arr9.reverse()
// }
// console.log(reverseArray([1,2,3]))

// function removeDuplicates1(arr10) {
//           let result = []
//           for (let i = 0; i < arr10.length; i++) {
//                     if(!result.includes(arr10[i])){
//                               result.push(arr10[i])
//                     }

                    
//           }
//           return result
// }
// console.log(removeDuplicates1([1,2,2,3]))

// function sumArray(arr11) {
//           let sum = 0
//           for (let i = 0; i < arr11.length; i++) {
//                     sum += arr11[i] 
                    
//           }
//           return sum
// }
// console.log(sumArray([1,2,3]))

// function filterEven(arr12) {
//           let even = []
//           for (let i = 0; i < arr12.length; i++) {
//                     if (arr12[i] % 2 === 0) {
//                               even.push(arr12[i])
//                     }
                    
//           }
//           return even
// }
// console.log(filterEven([1,2,3,4,5]))

// function secondLargest(arr13) {
//           let sorted = []
          
//                sorted = arr13.sort((a, b) => b - a)
                    
          
//           return sorted[1]
// }
// console.log(secondLargest([10,20,30,40]))

// function flatten(arr14) {
//           return arr14.flat()
// }
// console.log(flatten([1, [2,3], 4]))

function nextInLine(arr,value) {
          arr.push(value)
          arr.shift(value)
          return arr

}
console.log(nextInLine([1,2,3,4],10))

function count(cards){
          let total = 0
          for (let i = 0; i < cards.length; i++) {
                    let card = cards[i];

                    if ([2,3,4,5,6].includes(card)) total += 1
                    else if([10, "J", "Q", "K", "A"].includes(card)) total -= 1
                                        
          }
          return total
         
}
console.log(count([5, 9, 10, 3, "J", "A", 4, 8, 5])); // ➞ 1


        
function calculator(num1, operator, num2) {
        if(operator === "/" && num2 === 0)
           return "Can't divide by 0!"
          
        switch (operator) {
          case "+":
                 return num1 + num2   
          case "-":
                    return num1 - num2
          case "*":
                    return num1 * num2
          case "/":
                    return num1 / num2
          default:
                    return "Invalid operator"
        }
        }
        
        console.log(calculator(2, "+", 2)); // 4
        console.log(calculator(2, "*", 6)); // 12
        console.log(calculator(4, "/", 2)); // 2
        console.log(calculator(4, "/", 0)); // "Can’t divide by 0!"

        function mean(num3, num4, num5) {
          let sum = 0

          for (let i = 0; i < arr3.length; i++) {
                    const element = array[i];
                    
          }
}