//9.1
var n = prompt('n=')
if (n>0)
{
    alert('la so nguyen duong')
}
else
{
    alert('la so nguyen am')
}
//9.2
if (n%3==0)
{
    alert('chia het cho 3')
}
else
{
    alert('khong chia het cho 3')
}
if(n%5==0)
{
    alert('chia het cho 5')
}
else
{
    alert('khong chia het cho 5')
}
//9.3
if(n == 1 || n == 3  || n == 5 || n == 7 || n == 8 || n == 10 || n == 12)
{
    alert('thang co 31 ngay')
}
else if(n == 2)
{
    alert(' thang co 28 or 29 ngay')
}
else{
    alert('thang co 30 ngay')
}
//9.5
 var a = prompt ('a=')
 var b = prompt ('b=')
 var c = prompt ("c=")
 if((a+b)>c && (b+c)>a && (a+c)>b)
 {
    alert('day la hinh tam giac')
 }
 else
 {
    alert('day khong phai la hinh tam giac')
 }
