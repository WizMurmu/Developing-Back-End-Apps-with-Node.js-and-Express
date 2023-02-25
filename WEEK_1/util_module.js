var util = require('util');
var str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
console.log(util.format(str, i)); //outputs "The loop has executed <i> time(s)
}