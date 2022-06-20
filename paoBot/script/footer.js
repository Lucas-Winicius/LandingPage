const footer = () => {
    const elementFooter = document.querySelector('footer')
    let data = new Date

    let dataContent = { dia: data.getDate(), mes: data.getMonth(), ano: data.getFullYear(), hora: data.getHours(), min: data.getMinutes(), sec: data.getSeconds() }
    const emojis = ['&#x2800;', '&#x1F383;', '&#x1F920;', '&#x1F640;', '&#x1F928;']
    const informacoes = {copy: '&copy;', botName: 'Pão Bot', anoDeCriacao: 2021}    

    elementFooter.setAttribute('style', 'text-align: center; background-color: #14161d; color: white; padding: 4px; font-size: 0.8rem; font-weight: bolder;')

    if (dataContent.mes == 0 && dataContent.dia == 1) {
        elementFooter.innerHTML = `Feliz Ano Novo&#x1F389;`
    }
     
    else if(dataContent.mes == 1) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F389;`
    } 

    else if(dataContent.mes == 2 && dataContent.dia == 8) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F469;`
    } 

    else if(dataContent.mes == 3) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F407;`
    } 

    else if(dataContent.mes == 4 && dataContent.dia == 8) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F931;`
    } 

    else if(dataContent.mes == 5 && dataContent.dia == 12) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F498;`
    } 

    else if(dataContent.mes == 7) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F468;`
    } 

    else if(dataContent.mes == 9 && dataContent.dia == 12) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F9D2;`
    } 

    else if(dataContent.mes == 11 && dataContent.dia == 25) {
        elementFooter.innerHTML = `Feliz Natal&#x1F384;`
    }

    else if(dataContent.mes == 11 && dataContent.dia == 31) {
        elementFooter.innerHTML = `Vespera de Ano Novo&#x1F38A;`
    } 

    else if(dataContent.mes == 11) {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F385;`
    } 

    else {
        elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}${emojis[randint(0, emojis.length - 1)]}`
    }

}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

footer()

// ${informacoes.copy} ${informacoes.anoDeCriacao} - 2022 | ${informacoes.botName}
// style="text-align: center; background-color: #14161d; color: white; padding: 4px; font-size: 0.8rem; font-weight: bolder;"

/**
 * jan - 0
 * fev - 1
 * mar - 2
 * abr - 3
 * mai - 4
 * jun - 5
 * jul - 6
 * ago - 7
 * set - 8
 * out - 9
 * nov - 10
 * dez - 11
 */
