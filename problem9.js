function f(n){
  var b;var c;
  for(c=3;c<n;c++){
    for(b=2;b<c;b++){
      var a = 1000 - b - c;
      if (a*a+b*b===c*c && a>0 && a<b){
        console.log(a,b,c,a*b*c);
      }
    }
  }
}


console.log(f(1000));
