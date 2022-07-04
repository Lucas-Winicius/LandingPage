let userName = 'Login'

// Botão de Adicionar o Bot
const botaoAdicionar = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=965678250531643472&permissions=8&scope=bot%20applications.commands', '_blank')
}

// Pegar login
const getLoggin = () => {
    const inputElement = document.querySelector('#user')
    if (inputElement.value == '') {
        document.querySelector('#errorMessage').innerHTML = 'Insira um nome de usuario'
    }
    else {
        userName = inputElement.value
        console.log(userName)
        document.querySelector('body').id = inputElement.value
        openPage('./content/pagInicial.html')

        let i = setInterval(function () {

            clearInterval(i);

            document.getElementById("loading").style.display = "none";
            document.getElementById("conteudo").style.display = "inline";

        }, 2000);

        setTimeout(function () {
            userLoad()
        }, 2000)
    }
}

//loading pag inicial
setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
}, 1000);




// Abrir o conteudo das paginas desejadas
const openPage = (url) => {

    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.querySelector('body').innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}


// Carrega o Nome do usuario
const userLoad = () => {
    document.querySelector('#userName').innerHTML = userName
}




// Config Da Seta
const seta = () => {
    let seta = document.querySelector('#seta')
    if (window.scrollY > 300) { seta.classList.add('setapause') }
    else { seta.classList.remove('setapause') }
}


//Elemento para desativar a SETA ao clicar no botão do nav em telas pequenas  
const setaOff = () => {
    const seta = document.querySelector('#seta')
    const style = getComputedStyle(seta)
    if(style.display == 'block') { seta.setAttribute('style', 'display: none;') }
    else { seta.setAttribute('style', 'display: block;') }
}



// Animacao do conteinerAnimation
const conteinerAnimation = () => {
    let conteiner = document.querySelector('.containeranimation')
    let conteinerSection = document.querySelector('#containeranimation2')
     if(window.scrollY > 230) {
        conteiner.style.display = "block"
        conteiner.style.animationName = "slide"
        conteiner.style.animationTimingFunction = "ease"
        conteiner.style.animationDuration = "1s"
     } if(window.scrollY > 600) {
        conteinerSection.style.display = "block"
        conteinerSection.style.animationName = "slide"
        conteinerSection.style.animationTimingFunction = "ease"
        conteinerSection.style.animationDuration = "1s"
     }
}




// Ativa as funcoes
window.addEventListener('scroll', () => { seta(), conteinerAnimation() })