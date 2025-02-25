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
          
}


//Problem 4
//Problem 5