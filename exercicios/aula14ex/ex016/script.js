function contar() {
    var ini = window.document.getElementById("ini")
    var fim = window.document.getElementById("fim")
    var pas = document.getElementById("pas")
    var res = document.getElementById("res")
    var n1 = Number(ini.value)
    var n2 = Number(fim.value)
    var n3 = Number(pas.value)

    if (ini.value.length == 0 || Number(fim.value) <= Number(ini.value) || Number(ini.value) < 0) {
        alert("[ERRO] Algo deu errado! Preencha o campo de forma correta!")
        res.innerHTML = `Impossível Contar!`
    } else if (fim.value.length == 0 || Number(fim.value) <= 0) {
        alert("[ERRO] Algo deu errado! Preencha o campo de forma correta!")
        res.innerHTML = "Impossível Contar!"
    } else if (pas.value.length == 0 || Number(pas.value) <= 0) {
        alert("[ERRO] PASSO INVÁLIDO! O valor será reajustado para 1!")
        pas.value = 1
        res.innerHTML = "Tente Novamente!"
    } else {
        for (var n1; n1 <= n2; n1 += n3) {
            res.innerHTML += `${n1}`
        }
    }
}