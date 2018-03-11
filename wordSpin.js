function spinWords(string){
  'use strict';
  let wordsArray = string.split(' ');
  let lettersArray = wordsArray.map( word => word.split(''));
  for (let i = 0; i < lettersArray.length; i += 1) {
    if (lettersArray[i].length >= 5) {
      lettersArray[i] = lettersArray[i].reverse();
    } 
  }
 wordsArray = lettersArray.map(word =>  word.join(''));
  return wordsArray.join(' ')
}
console.log(spinWord("This is another test")); 