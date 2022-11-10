
//12.1
//  var tong = 0;
// for (let index = 0; index <= 100; index++) {
//     tong += index;
    
// }

//     console.log(tong);
//12.2
// var n = prompt('n=')
// var tong = 0;   
// for (let index = 0; index < n; index++) {
//     if(index %3==0){
//         tong +=index;
//     }
//  }   
//  alert(tong)
//12.3
// var first = 1;
// var last = 2;
// var count = 0;
// for (let index = 0; index < 10; index++) {
//     alert(first)
//     var t = last + first;
//     first = last;
//     last = t;
//     count ++;
// }
var n = 12345;
var origin = n;
var inverst = 0;
for(let i=0;n>0;i++){
    var mod = n %10;
    inverst = inverst * 10 + mod;
    n = n / 10;
}
if (origin == inverst) {
    alert("do la so polinom")
}
   
    



   