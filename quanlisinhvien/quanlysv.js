class  NamHoc{
    constructor(id, name){
        this.id= id;
        this.name= name;
    }
}
var arrNamHoc = new  Array()
function insertNamHoc(id,name){
    let nh = new NamHoc(id,name)
    arrNamHoc.push(nh)
}
function updateNamHoc(id,name){
    arrNamHoc.forEach(nh => {
        if(nh.id == id) nh.name = name
    }); 
}
function DeleteNamHoc(id,name){
    let index = 0;
    for (let index = 0; index < arrNamHoc.length; index++) {
      if(arrNamHoc[index].id == id)
      break
        
    }
    arrNamHoc.splice(index,1)
}
/**
 * Đối tượng dom
 */
var idNamHoc = 0
function actionInsertNamHoc(){
    let name = document.getElementById('namhoc_dom_insert_name').value

    idNamHoc ++
    insertNamHoc(idNamHoc,name)
    renderNamHoc()
}
 function renderNamHoc(){
    let index = 0
    let namhocDomConten = document.getElementById('namhoc_dom_content')

    arrNamHoc.forEach(nh => {
        index ++
        let nodeTr = document.createElement('tr')
        let nodeTdStt = document.createElement('td')
        nodeTdStt.innerText =index
        nodeTr.appendChild(nodeTdStt)

        let nodeTdName = document.createElement('td')
        nodeTdName.innerText =nh.name
        nodeTr.appendChild(nodeTdName)


        namhocDomConten.appendChild(nodeTr)
    });
 }
