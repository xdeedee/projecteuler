// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
"use strict";

function f(x){
  var cs = new Array();
  
  for(var i=1;i<=x;i++){
    console.log("i:",i);
    cs.push(g(i));
  }
  
  var max = cs.reduce(function (x,y){
    if(x>y || y==undefined){
      return x;
    } else {
      return y;
    }
  });
  
  for(var k in cs){
    if(max===cs[k]){
    // console.log(cs[k]);
      //   console.log(k);
      break;
    }
  }
  return k; 
}

function g(i){
  var a;//商
  var b = 1;//余数
  var as = new Array();//商
  var bs = new Array();//余数
  for(var j=0;;j++){
    a = parseInt(b * 10,i);
    b = (b * 10) % i;
    // console.log("j:",j);
    if(b===0){
      break;
    } else {
      if(bs.indexOf(b)!=-1){
        var c = j-bs.indexOf(b);
        break;
      }else {
        as.push(a);
        bs.push(b);
      } 
    }
  }
  return c;
}


console.log(f(1000));
// console.log(f(1000));



// var max = f(1000).reduce(function (x,y){
//     if(x>y || y==undefined){
//       return x;
//     } else {
//       return y;
//     }
//   });
// console.log(max);
