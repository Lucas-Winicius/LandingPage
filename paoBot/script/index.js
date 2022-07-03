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
var i = setInterval(function () {
    
    clearInterval(i);
  
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


// NavBarConfig
const navBar = () => {
    let menu = document.querySelector('#menu')
    if (window.scrollY > 0) { menu.classList.add('menuFixo') }
    else { menu.classList.remove('menuFixo') }
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

// Ativa as funcoes
window.addEventListener('scroll', function () { seta(), navBar() })