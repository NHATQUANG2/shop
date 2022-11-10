var a = prompt('n=')
var n = a% 3;
var n1 = a%5;
switch(n){
    case 0:
        alert(' chia het cho 3')
    break;
    case 1:
    case 2:
        alert('khong chia het cho 3')
    break;   
}
switch(n1){
    case 0:
        alert('chia het cho 5')
    break;
    case 1:
        alert('khong chia het cho 5')
    break;
}
   