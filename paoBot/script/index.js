let userName = 'Login'


//loading pag inicial
setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
}, 2500);


// Botão de Adicionar o Bot
const botaoAdicionar = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=965678250531643472&permissions=8&scope=bot%20applications.commands', '_blank')
}


// Carrega o Nome do usuario
const userLoad = () => {
    document.querySelector('#userName').innerHTML = userName
}


// Config Da Seta
const seta = () => {
    let seta = document.querySelector('#seta')
    if (window.scrollY > 400) { seta.classList.add('setapause') }
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

    const animacao = (conteiner) => {

        conteiner.style.display = "block"
        conteiner.style.animationName = "slide"
        conteiner.style.animationTimingFunction = "ease"
        conteiner.style.animationDuration = "3s"
        
    }

    if(window.scrollY > 360)  { animacao(document.querySelector('.containeranimation'))  } 
    if(window.scrollY > 800)  { animacao(document.querySelector('#containeranimation2')) } 
    if(window.scrollY > 1400) { animacao(document.querySelector('#containeranimation3')) }
    if(window.scrollY > 1900) { animacao(document.querySelector('#containeranimation4')) }
    if(window.scrollY > 2700) { animacao(document.querySelector('#containeranimation5')) }
    if(window.scrollY > 2780) { animacao(document.querySelector('#containeranimation6')) }


}

const pegarLogin = () => {
    const inputValue = document.querySelector('#user')
    const loading = document.getElementById("loading")
    const conteudo = document.getElementById("conteudo")
    const login = document.getElementById("loginDiv")

    if(inputValue.value == '') {
        document.querySelector('#errorMessage').innerHTML = 'Insira um nome de usuario'
    } else {
        userName = inputValue.value
        userLoad()

        
        login.style.display = 'none'
        login.innerHTML = ''
        loading.style.display = 'block'
        
        setTimeout(() => {
            loading.style.display = 'none'
            conteudo.style.display = 'block'
            
        }, 1500)
    }
}

const openLogin = () => {
    const conteudo = document.getElementById("conteudo")
    const login = document.getElementById("loginDiv")
    const loginHTML = '<link rel="stylesheet" href="estilos/login.css"><div id="conteiner"><h1>Login</h1><input type="text" name="user" id="user" placeholder="Usuario" maxlength="10"><button onclick="pegarLogin()">Prosseguir</button><p style="color: red; text-align: center; margin-top: 20px;" id="errorMessage"></p></div><script src="./script/index.js"></script>'

    conteudo.style.display = 'none'
    login.innerHTML = loginHTML
    login.style.display = 'block'
}

// Ativa as funcoes
window.addEventListener('scroll', () => { seta(), conteinerAnimation() })