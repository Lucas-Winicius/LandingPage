const footer = () => {
    let data = new Date
    let dataContent = { dia: data.getDate(), mes: data.getMonth(), ano: data.getFullYear(), hora: data.getHours(), min: data.getMinutes(), sec: data.getSeconds() }
    const elementFooter = document.querySelector('#footerDetails')
    const emojis = ['&#x2800;', '&#x1F383;', '&#x1F920;', '&#x1F640;', '&#x1F928;']
    const informacoes = {copy: '&copy;', botName: 'Pão Bot', anoDeCriacao: 2021}    
   


    elementFooter.setAttribute('style', 'color: white; padding: 4px; font-size: 0.9rem;')
    elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}${emojis[randint(0, emojis.length - 1)]}`
    console.log(dataContent)

    switch(dataContent.mes) {

        case 0:
            if(dataContent.dia == 1) { elementFooter.innerHTML = `Feliz Ano Novo&#x1F389;` }
            break

        case 1:
            elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F389;`
            break

        case 2:
            if(dataContent.dia == 8) { elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F469;` }
            break

        case 3:
            elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F407;`
            break

        case 4:
            if(dataContent.dia == 8) { elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F931;` }
            break

        case 5:
            if(dataContent.dia == 12) { elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F498;` }
            break

        case 7:
            elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F468;`
            break

        case 9:
            if(dataContent.dia == 12) { elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F9D2;` }
            break

        case 11:
            elementFooter.innerHTML = `${informacoes.copy} ${informacoes.anoDeCriacao} - ${dataContent.ano} | ${informacoes.botName}&#x1F385;`
            if(dataContent.dia == 25) { elementFooter.innerHTML = `Feliz Natal&#x1F384;` }
            if(dataContent.dia == 31) { elementFooter.innerHTML = `Vespera de Ano Novo&#x1F38A;` }
            break  
            
        default:
            if(randint(0, 10000) == 2) { elementFooter.innerHTML = `OMG! VOCÊ ESTÁ VENDO UM TEXTO RARO, SE CONSIDERE UMA PESSOA DE SORTE!!!` }

    }
}

let randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

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
 * jul - 6 *
 * ago - 7
 * set - 8 *
 * out - 9
 * nov - 10 *
 * dez - 11
 */

