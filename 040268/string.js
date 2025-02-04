//string//
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


//เปรียบเทียบด้วย ascii characters //
// for(let i = 'A'.charCodeAt(0); i<'z'.charCodeAt(0); i++){
//           console.log(`code ${1} char ${String.fromCharCode(i)}`)
// }


const strPrim = "aom"             
const strPrim1 = String(1)        
const strPrim2 = String(true)      
const strObj = new String(strPrim) 

console.log(strPrim)    //output: aom
console.log(strPrim1)   //output: 1
console.log(strPrim2)   //output: true
console.log(strObj)     //output: [String: 'aom']

//String.prototype.at() 
let name = "John"
console.log(name.charCodeAt(0))  //output: 74
console.log(name[0])   //output: J

//String.prototype.concat()
let lastName = "Wick"    
console.log(name+' '+lastName)  //output: John Wick
console.log(name.concat(' ', lastName)) //output: John Wick

//String.prototype.indexOf() AND String.prototype.substring() 
const paragraph = "I think Ruth's dog is cuter then your dog!"
console.log(paragraph.indexOf("cuter"))  //output: 22
let pos = paragraph.indexOf("cuter") 
console.log(pos)   //output: 22 
console.log(paragraph.substring(0, pos)) //output: I think Ruth's dog is

//String.prototype.padStart() AND String.prototype.padEnd()
console.log('123'.padStart(10, '-')) //output: -------123
console.log('123'.padEnd(10, '-'))  //output: 123-------
console.log(String(123).padEnd(10, '-'))  //output: 123-------

//String.prototype.repeat()
console.log('*'.repeat(10)) //output: **********

console.log('*'.repeat(1)) //output: *
console.log('*'.repeat(2)) //output: **
console.log('*'.repeat(3)) //output: ***
console.log('*'.repeat(4)) //output: ****
console.log('*'.repeat(5)) //output: *****

for(let i = 1; i<6; i++){
          console.log('*'.repeat(i)) //output: เหมือนกันข้อด้านบน
}

//String.prototype.slice() เอาบางส่วน เหมือน suubstring
const str = 'The quick brown fox jumps over the lazy dog.'
//เริ่มจาก 31
console.log(str.slice(31)) //output: the lazy dog. 
//เรื่มจาก 0 ถึง 10 
console.log(str.slice(0, 10)) //output: The quick

//String.prototype.split()
const str1 = 'The quick brown fox jumps over the lazy dog.'
console.log(str1.split(" ")) //output:  'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'

//String.prototype.trim()
const greeting = ' Hello world!  '
console.log(greeting.trim())  //output:Hello world!
console.log(greeting)  //output: Hello world!



