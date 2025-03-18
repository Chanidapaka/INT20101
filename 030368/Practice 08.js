//Problem 1
function nextInLine(arr, num) {
    arr.push(num);  // เพิ่ม num เข้าไปท้าย array
    arr.shift();    // ลบตัวแรกของ array
    return arr;
}

// Test Cases
console.log(nextInLine([1,2,3,4],10)); // [2,3,4,10]
console.log(nextInLine([7,6,3,23,17],1)); // [6,3,23,17,1]

//Problem 2
function count(cards) {
    let total = 0;
    for (let card of cards) {
        if ([2, 3, 4, 5, 6].includes(card)) {
            total += 1;
        } else if ([10, "J", "Q", "K", "A"].includes(card)) {
            total -= 1;
        }
        // 7,8,9 จะไม่นับ (0) ดังนั้นไม่ต้องทำอะไร
    }
    return total;
}

// Test Case
console.log(count([5,9,10,3, "J","A",4,8,5])); // 1

//Problem 3 
function keysAndValues(obj) {
    let keys = Object.keys(obj).sort(); // เรียง keys ตามตัวอักษร
    let values = keys.map(key => obj[key]); // ดึงค่าตามลำดับ keys
    return [keys, values];
}

// Test Case
console.log(keysAndValues({a: 1, c: 2, b: 3})); // [["a", "b", "c"], [1,3,2]]

//Problem 4
function calculator(num1, operator, num2) {
    if (operator === "/" && num2 === 0) return "Can’t divide by 0!";
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        default: return "Invalid operator";
    }
}

// Test Cases
console.log(calculator(2, "+", 2)); // 4
console.log(calculator(2, "*", 6)); // 12
console.log(calculator(4, "/", 2)); // 2
console.log(calculator(4, "/", 0)); // "Can’t divide by 0!"