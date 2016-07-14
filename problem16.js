/*
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000?
 */
"use strict";

function prettyMulti(x, y){
  var xs = x.split("").map(function(x){return parseInt(x);}).reverse();
  var ys = y.split("").map(function(x){return parseInt(x);}).reverse();

  var vs = [];
  for(var i=0;i<xs.length;i++){
    vs.push(oneMultiMany(xs,ys,i));
  }
  // console.log(vs);
  var hs = vs.reduce(function (xs, ys){
    return prettyAdd(xs, ys);
  });
  return  hs.reverse().join('');
}

function oneMultiMany(xs,ys,i){ 
  var z = 0;
  var a = xs[i];
  var us = [];
  for(var j=1;j<=i && i>0;j++){
    us.push(0);
  }
  for(var k=0;k<ys.length;k++){
    var r = a * ys[k] + z;
    us.push(r % 10);
    z = parseInt(r/10);
  }
  if(z>0){
    us.push(z);
  }
  return us;
}

//加法函数
function prettyAdd(xs, ys) {
  let n = Math.max(xs.length,ys.length);  
  var ws = [];
  var z = 0;
  for(var i=0;i<n;i++){
    var r = (xs[i] || 0) + (ys[i] || 0) + z;
    ws[i] = r % 10;
    z = parseInt(r/10);
  }
  if(z>0){
    ws.push(z);
  }
  return ws;
}

//测试
// if(prettyMulti('1', '345678') == (1*345678).toString()){
//   console.log("1*345678 pass.");
// } else {
//    console.error("1*345678 failed!");
// };





// //200
var a200 = prettyMulti('1267650600228229401496703205376','1267650600228229401496703205376');
console.log(a200);
// // //400
//console.log(prettyMulti('1606938044258990275541962092341162602522202993782792835301376','1606938044258990275541962092341162602522202993782792835301376'));

// // //800
console.log(prettyMulti('2582249878086908589655919172003011874329705792829223512830659356540647622016841194629645353280137831435903171972747493376','2582249878086908589655919172003011874329705792829223512830659356540647622016841194629645353280137831435903171972747493376'));
// // //1000



var a1000 =prettyMulti('6668014432879854274079851790721257797144758322315908160396257811764037237817632071521432200871554290742929910593433240445888801654119365080363356052330830046095157579514014558463078285911814024728965016135886601981690748037476461291163877376','1606938044258990275541962092341162602522202993782792835301376');

var as1000 = a1000.split("").map(function(x){return parseInt(x);});
console.log(as1000.reduce(function (x, y) {return x + y;}));

var a15 ="32768";
var as15 = a15.split("").map(function(x){return parseInt(x);});
console.log(as15.reduce(function (x, y) {return x + y;}));
