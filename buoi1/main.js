// console.log('hello wold');

// var x1,x2;
// var a,b,c,delta;
// a = prompt ("a=");
// b = prompt("b=");
// c = prompt("c=");
// delta = b*b-4*a*c;
// if(delta<0)
// {
//     console.log('phuong trinh vo nghiem');
// }
// else if(delta == 0)
// {
// console.log('phuong trinh co nghiem kep x='+-b/2*a);
// }
// else
// {
//     x1 = (-b+Math.sqrt(delta))/2*a;
//     x2 = (-b+Math.sqrt(delta))/2*a;
//     console.log('phuong trinh co 2 nghiem phan biet x1='+-1 +' va x2='+-2);
// }
// var tong = 0;
// var n = 10;
// for (let i = 0; i < n; i++) {
//     tong +=i;
    
// }
// alert(tong)
 var n = prompt('n=');
 var tong = 0;
 for (let i = 0; i < n; i++) {
    if(n % 3 !=0 && n % 4!= 0 ){
        tong ++;
    }
    if(n%5==0){
        tong ++;
    }
 }
 console.log('tong', tong);
 
