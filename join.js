"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    var string = "";
      for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
          string += array[i];
        } else {
          string += array[i] + ',' + ' ';
        }
      }
      return string;
  }
}


const value = _.join(["hello", "goodbye"], ", ")

console.log(value);
