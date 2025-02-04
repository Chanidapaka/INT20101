//1.
function valid(str) {
          if (str.length == 0){
                    return false
          }
          
          if (!((str.charAt(0) >= 'a' && str.charAt(0) <= 'z') || 
                      (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z'))){
                    return false
          }

                    for (let i = 1; i < str.length; i++){
                              const char = str.charAt(i)

                             if (char == "_") {
                               return false
                             }else (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || 
                             (char >= '0' && char <= '9'))); {
                              return false
                              }
                    }
               return true    
          }
           
console.log(valid('2aom'))
console.log(valid(' aom'))
console.log(valid('aom'))
console.log(valid('Aom'))
console.log(valid(''))



function stringToArray(str){
          str.split()
}