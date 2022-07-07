function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src= "img/manha.jpg"
        document.body.style.background = '#4e2f04'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src= "img/tarde.jpg"
        document.body.style.background = '#7e8182'
    } else {
        // BOA NOITE!
        img.src= "img/noite.jpg"
        document.body.style.background = '#102a3f'
    }
}