//ข้อสอบ
   //1
   console.log('A'>'a') //false
   //console.log('1'= 1) //error
   console.log( true > false) //true

   //2
   function twoNumber(num1, num2) {
       let result
       if (num1 < num2) {
           result = 'true'
       }else {
           result = 'false'
       }
       return result
   }

   if(twoNumber(90, 50)){
       console.log('num1 > num2')
   }else {
       console.log('num1 < num2')
   }

   //3
   let arr1 = [1,2,3,4]
   let arr2 = [5,6,7]

   arr2.push(arr1[0])
   arr1.push(arr2[0])

   arr1.splice(0,1)
   arr2.splice(0,1)

   arr2.push(arr1[0])
   arr1.push(arr2[0])

   arr1.splice(0,1)
   arr2.splice(0,1)

   console.log(arr1)
   console.log(arr2)

   //4
   let i = 0
   let output = " "
   while (i < 28) {
          if (i==0 || i ==6|| i==7 || i==10 || i==13 || i==14 ||  i==17 || i==20 || (i > 20 && i < 24) || i > 24  ) {
                    output += '0'
          } else {
                    output += 'x'
          }if( i==6 || i==13 ||  i==20 || i==27  ){
                    output += '\n'
          }
          i++
   }
   console.log(output)
