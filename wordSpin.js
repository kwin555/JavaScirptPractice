function spinWords(string){
  'use strict';
  let wordsArray = string.split(' ').map(function (word) {
    return (word.length >= 5) ? word.split('').reverse().join('') : word
  });
  return wordsArray.join(' ');
}
console.log(spinWords("This is another test")); 