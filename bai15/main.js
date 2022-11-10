//bai tap 1
let x = 0.05;
let esp = 0.001;
let mu = 1;
let first = 1;
let dau = -1;
let second = first + ( Math.pow(x,mu)/(mu*(mu -1)));
while(Math.abs(first-second>esp)){
    mu ++;
    dau = - dau;
    first = second;
    second = first + ( Math.pow(x,mu)/(mu*(mu -1)));
}
console.log(first);
//bai tap 2
