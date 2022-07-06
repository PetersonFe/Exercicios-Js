function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
    msg.innerHTML = `${hora}`
    if (hora >= 0 && hora <12){
        //BOM DIA!
        img.src = '../modelo/img/manhã.jpg'
    } else if (hora >= 12 && hora <18){
        //BOA TARDE!
        img.src = '../modelo/img/tarde.jpg'
    } else {
        // BOA NOITE!
        img.src = '../modelo/img/noite.jpg'
    }


}