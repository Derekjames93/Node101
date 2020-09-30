const fs = require('fs');
// console.log(process.argv[2])

const test = fs.readFileSync(process.argv[2])
const testString = test.toString();

const lineSplits = testString.split('\n')

console.log(lineSplits.length - 1)

