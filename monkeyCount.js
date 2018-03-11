function monkeyCount(n) {
    'use strict';
    let array_nums = [];
    for (let i = 1; i <= n; i+=1) {
      array_nums.push(i);
    }
    return array_nums;
}

console.log(monkeyCount(5));
