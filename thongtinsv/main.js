class Thongtin {
    constructor(id, name, birthday, gioitinh, country, city, district, adress) {
        this.id = id
        this.name = name
        this.birthday = birthday
        this.gioitinh = gioitinh
        this.country = country
        this.city = city
        this.district = district
        this.adress = adress
    }
}
var idThongtin = 0
function actionThem() {
    let domThongtin = document.getElementById('thongtin')
    let name = domThongtin.value
    domThongtin = document.getElementById('birthday')
    let birthday = domThongtin.value
    domThongtin = document.getElementById('gioitinh')
    let gioitinh = domThongtin.value
    domThongtin = document.getElementById('country')
    let country = domThongtin.value
    domThongtin = document.getElementById('city')
    let city = domThongtin.value
    domThongtin = document.getElementById('district')
    let district = domThongtin.value
    domThongtin = document.getElementById('adress')
    let adress = domThongtin.value
    idThongtin++

    let tt = new Thongtin(idThongtin, name, birthday, gioitinh, country, city, district, adress)
    console.log(tt);
}

