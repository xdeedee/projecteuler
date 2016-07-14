"use strict";

function problem25(n) {
    let y;
    let a = [1];
    let b = [1];
    let c = [];

    for (let i = 3; ; i++) {
        c = prettyAdd(a, b);
       // console.log([a,b,c]);
        a = b;
        b = c;
        if (c.length >= n) {
            y = i;
            break;
        }
    }
    return y;
}


//翻转数组；
function reverse(xs) {
    let len = xs.length;
    return xs.map(function(x,i){
        //console.log([x,i]);
        return xs[len-i-1];
    })
}
//console.log(reverse([1,3]));

//加法函数
function prettyAdd(vs, us) {
    let xs = reverse(vs);
    let ys = reverse(us);   
    let n = Math.max(xs.length, ys.length);
    var ws = [];
    var z = 0;
    for (var i = 0; i < n; i++) {
        var r = (xs[i] || 0) + (ys[i] || 0) + z;
        ws[i] = r % 10;
        z = parseInt(r / 10);
    }
    if (z > 0) {
        ws.push(z);
    }
    return reverse(ws);
}

//console.log(prettyAdd([1,3],[2,1]));
console.log(problem25(3));
console.log(problem25(1000));