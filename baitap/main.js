var studentList = new Array()

function input() {
    for (let i = 0; i < 10; i++) {
        studentList.push({
            name: 'Sinh vien' + i,
            toan: randomInRange(0, 10),
            ly: randomInRange(0, 10),
            hoa: randomInRange(0, 10),
            diemTrungBinh: function(){
                return (this.toan + this.ly + this.hoa) / 3
            }
        })
    }
}
function print(){
    studentList.forEach(std => {
        console.log(std.name + ':' + std.diemTrungBinh())
    });
}

function findMax() {
    var max = studentList[0]
    studentList.forEach(std => {
        if(max.diemTrungBinh() < std.diemTrungBinh())
            max = std
    });
    console.log(max.name + ':' + max.diemTrungBinh())
}

function randomInRange(min, max) {
    return Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
}

input()
print()
console.log('***************')
findMax()