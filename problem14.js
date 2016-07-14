
function f(x){
  var as = [];//对应的数字
  var bs = [];//对应的序列的次数
  for(var n=2;n<1000000;n++){
    as.push(n);
    bs.push(g(n));
  }
  //bs的最大值
  var max = bs[0];
  for (var j = 1; j < bs.length; j++){
    if (bs[j] > max) {
      max = bs[j];
    }
  }
  //bs的最大值对应as的数字
  for(var i in bs){
    if(bs[i]==max){
      break;
    }
  }
  
  return as[i];
}

//迭代序列定义
function g(n){
  var y = 0;
  do {
    if(n%2===0){
      n = n / 2;
      y = y + 1;
    } else {
      n = 3 * n + 1;
      y = y + 1;
    }
  } while (n != 1);
  return y;
}


//测试
console.log(f(1000000));
