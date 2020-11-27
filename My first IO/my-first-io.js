var fs = require('fs') 
var bf = fs.readFileSync(process.argv[2])
var lines= bf.toString().split('\n').length -1
console.log(lines)
