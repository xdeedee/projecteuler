//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

function primes(x){
  var arr = [];
  if(x<2){
    return arr;
  }else{
    arr[0] = 2; 
    for(var n=2; n<=x; n++){
      var y = true;
      for(var i=0;arr[i]<=Math.sqrt(n);i++){
        if(n%arr[i]===0){      
          y = false;
          break;
        }       
      }
      if(y && n>2){
        arr.push(n);      
      }
    }
    return arr;
  }
}


var a = primes(2000000).reduce(function(x,y){
  return x+y;
});
console.log(a);

