function create(){
    if(localStorage.length == 0) {
        var pessoa = {nome: ""}
        var dataJson = JSON.stringify(pessoa);
        localStorage.setItem("myJson", dataJson);
    }
}

function update(id) {
    var localdata = localStorage.getItem("myJson");
    localStorage.removeItem('myJson');
    var dataObj = JSON.parse(localdata);
    var entrada = document.getElementById(id).value;
    dataObj.nome = entrada;
    document.getElementById(id).value = '';
    var dataJson = JSON.stringify(dataObj);
    localStorage.setItem("myJson", dataJson);
}



