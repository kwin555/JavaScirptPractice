var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
var degreesNum = Number(degrees);
var degreesCelcius = (degreesNum - 32) / 1.8;
console.log('It is ' + degreesCelcius + ' degrees Celcius!');
