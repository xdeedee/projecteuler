"use strict";

function permutation(xs) {
  let len = xs.length;
  if (len <= 1) {
    return [xs];
  } else {
    let ws = [];
    for (let i = 0; i < len; i++) {
      let ys = xs.filter(function (x) {
        return x !== xs[i];
      });
      let zs =permutation(ys).map(function (arr) {
        return [xs[i]].concat(arr);
      }) 
      ws = ws.concat(zs);
    }
    return ws;
  }
  
}

//ceshi
console.log(permutation([1,2,3]));
let a = permutation([0,1,2,3,4,5,6,7,8,9])[999999].join('')
console.log(a);