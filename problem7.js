// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

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


var a = primes(1000000)[10000];
console.log(a);
