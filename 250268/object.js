//create a JavaScript object

//1.Object literals
 const p1 = {x:10, y:20}
 const p2 = {x:5, y:10}
 console.log(p1.x) //output: 10
 console.log(p1.y) //output: 20
 console.log(p2.x) //output: 5
 console.log(p2.y) //output: 10

 //2.Constructor Functions
 function Point(x, y) {
          this.x = x
          this.y = y
 }
 const p3 = new Point(1, 2)
 const p4= new Point(2, 4)
 console.log(p3) //output: Point{x:1, y:2}
 console.log(p3.x) //output: 1
 console.log(p4.y) //output: 4
 console.log(p4)  //output: Point{x:2, y:4}

 //3.ES6 Classes
 class Point1 {
          constructor(x, y) {
                    this.x = x
                    this.y = y
          }
          distance(anotherPoint) {
                    return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
          }
          }
          const p5 = new Point1(10, 30)//p5={x:10, y:30}
          const p6 = new Point1(5, 4) //p6={x:5, y:4}
          console.log(p5.distance(p6)) // 26.476404589747453

//4.Object.create()
const person = { personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
const student = Object.create(person)
student.studentId = 651000101
console.log(person)//{ personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
console.log(student)//{ studentId: 651000101 }
console.log(student.studentId)//651000101
console.log(student.personId)//101
console.log(student.firstname)//Somsak
console.log(student.lastname)//Jaidee

//การเปรียบเทีย
//1.Referential equality
//Object Comparing
let student = { id: 1, name: "Joe" }
let newStudent = { id: 2, name: "Joe" }
let oldStudent = { id: 1, name: "Joe" }
let alumniStudent = student

if (student == alumniStudent) { //true
          console.log("student equals to alumni student by ==")
          //student equals to alumni student by ==
          }
          if (student == newStudent) { //false
          console.log("student equals alumni student by ==")
          }
          if (student === alumniStudent) { //true
          console.log("student strictly equals to alumni student")
          //student strictly equals to alumni student by ===.
          }
          if (student === newStudent) { //false
          console.log("student strictly equals to new student by ===")
          }
          if (Object.is(student, newStudent)) { //false
          console.log("student equals to new student by Object.is()")
          }
          if (Object.is(student, alumniStudent)) { //true
          console.log("student equals to new student by Object.is()")
          }

//2.Manual Comparison
function isStudentEqual(object1, object2) {
          return object1.id === object2.id
          }
          console.log(isStudentEqual(student, oldStudent)) //true
          console.log(isStudentEqual(student, alumniStudent))//true

//3.Shallow Equality
let book1 = {
          isbn: 123456789,
          title: "JavaScript",
          }
          let book2 = {
          isbn: 123456789,
          title: "JavaScript",
          }

          function shallowEquality(object1, object2){
                    const keys1=Object.keys(object1)
                    const keys2=Object.keys(object2)
                    if(keys1.length !== keys2.length){
                    return false
                    }
                    for(let key of keys1){
                    if(object1[key] !== object2[key] ){
                    return false
                    }
                    }
                    return true
                    }
                    console.log("shallow equality: " + shallowEquality(book1, book2)) //true

//JSON
//JSON.stringify()
console.log(JSON.stringify({ x:5, y:6}))

const stu1 = { id: 661230500020, name: 'Chanidapa Panta'}
const stu2 = { id: 661230500040, name: 'Kittipong sonchai '}
console.log(JSON.stringify(stu1) === JSON.stringify(stu2))

