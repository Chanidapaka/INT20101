//if and loop

//1Write a statement to determine the largest integer among two integers.
let num1 = 9
let num2 = 8
let largestNum = 0

if(num1 > num2 ){
     largestNum = num1
} else if (num1 < num2){
      largestNum = num2    
}else{
          console.log("The number is equal")
}
console.log("The largest number is "+largestNum)

//2 Write a statement to find the sign of the product of three numbers. The output can be positive, negative or zero.
let num3 = 3
let num4 = -9
let num5 = -5
let result = ""

          result = num3 * num4 * num5
          if(result > 0 ){
                    result = "positive"
          } else if (result < 0){
                    result = "negative"
          } else {
                    result = "zero"
          }
                    
          console.log("The result of the product of three numbers is "+ result)

//3 Write a statement to sort three numbers. Display the sorted numbers.
let num6 = 98
let num7 = 35
let num8 = 63

let numbers = [num6, num7, num8]

// ใช้ Bubble Sort แบบง่ายเพื่อเรียงเลข
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j]
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp
        }
    }
}

console.log("The sorted numbers are " + numbers[0] + " " + numbers[1] + " " + numbers[2])



//4 Write a program to construct the triangle stars using only one loop of for statement. Each iteration add/show only one star. 
let n = 5 // จำนวนบรรทัด

for (let i = 0; i < n; i++) {
    let row = "" // สร้างตัวแปรเก็บบรรทัดที่จะแสดงผล

    for (let j = 0; j < n + i; j++) { // คำนวณช่องว่าง + ดาว
        if (j < i * 2) { // เช็คว่าต้องเป็นช่องว่างหรือไม่
            row += " "
        } else {
            row += "* "
        }
    }
    
    console.log(row)
}


//5 Write a program to construct a letter “E” using only one loop of while statement. Each iteration add/show only one star. 
let count = 0
let output = ""

while (count < 7) {
    if (count === 0 || count === 3 || count === 6) {
        output += "* * * * *\n"
    } else {
        output += "*\n"
    }
    count++
}

console.log(output)


//6 Write a statement to determine which person is the winner according to the following rules:
//Rock beats Scissors
//Scissors(กรรไกร) beats Paper
//Paper beats Rock(ค้อน)

let person1 = "rock"
let person2 = "scissors"

if (person1 === person2) {
    console.log("It's a tie!")
} else  (
    (person1 === "rock" && person2 === "scissors") ||
    (person1 === "scissors" && person2 === "paper") ||
    (person1 === "paper" && person2 === "rock")
) 
    console.log("The winner is person1")

    

