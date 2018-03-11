function absentVowel(string){
  var vowels = ['a','e','i','o','u'];
  for(var i=0; i<vowels.length; i++) {
    if(string.indexOf(vowels[i]) < 0)
      return i;
  }

}
