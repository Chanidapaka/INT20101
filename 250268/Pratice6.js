//Problem 1
function inkLevels(inks) {
          return Math.min(inks.cyan, inks.magenta, inks.yellow)
}

console.log(inkLevels({cyan: 432, magenta: 543, yellow: 777}) )
console.log(inkLevels({cyan: 23, magenta: 12, yellow:  10} ))

//Problem 2
function getDistance(p1,p2) {
          return Math.sqrt((p1.x - p2.x) **2 + (p1.y - p2.y) **2 )
}

console.log(getDistance({x: 0, y: 4}, {x: 3, y: 0})) //5
console.log(getDistance({x: 0, y: 0}, {x: 1, y: 1})) //1.4142135623730951

//Problem 3
function countAll(str) {
          let result = { letters: 0, digits: 0 };
          
          for (let i = 0; i < str.length; i++) {
            if (/[a-zA-Z]/.test(str[i])) {
              result.letters++;
            } else if (/\d/.test(str[i])) {
              result.digits++;
            }
          }
          
          return result;
        }
        
        console.log(countAll("Hello World")); // { letters: 10, digits: 0 }
        console.log(countAll("H3ll0 Wor1d")); // { letters: 7, digits: 3 }
        


//Problem 4
function oldestPerson(people) {
          let maxAge = -1;
          let oldestName = '';
          
          for (let name in people) {
            if (people[name] > maxAge) {
              maxAge = people[name];
              oldestName = name;
            }
          }
          
          return oldestName;
        }
        
        console.log(oldestPerson({Emma: 71, Jack: 45, Ben: 29})); // "Emma"
        console.log(oldestPerson({Max: 9, Josh: 13, Sam: 48, Anne: 33})); // "Sam"
        

//Problem 5
const scores = {
          "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
          "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
          "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
          "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
        };
        
        function nameScore(name) {
          let score = 0;
          
          for (let i = 0; i < name.length; i++) {
            score += scores[name[i].toUpperCase()];
          }
          
          if (score <= 60) {
            return "Not too good";
          } else if (score <= 300) {
            return "Pretty good";
          } else if (score <= 599) {
            return "Very good";
          } else {
            return "The best";
          }
        }
        
        console.log(nameScore("Mubashir")); // "The best"
        console.log(nameScore("You")); // "Very good"
        console.log(nameScore("Pubg")); // "Not too good"
        