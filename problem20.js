"use strict";

function f(x){
  var y = 1;
  for(var i=1;i<=x;i++){
    y = prettyMulti(y,i);
  }
  console.log(y);
  var ys = y.toString().split("").map(function(a){return parseInt(a);});
  console.log(ys);
  var z = 0;
  for(var j=0;j<ys.length;j++){
    z = z + ys[j];
  }
  return z;
}


function prettyMulti(x, y){
  var xs = x.toString().split("").map(function(x){return parseInt(x);}).reverse();
  var ys = y.toString().split("").map(function(x){return parseInt(x);}).reverse();

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



console.log(f(100));
