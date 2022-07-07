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
}, 1400);




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
    // A baixo contém os containers que seram animados -->
    let conteiner = document.querySelector('.containeranimation')
    let conteinerSection = document.querySelector('#containeranimation2')
    let conteinerAside = document.querySelector('#containeranimation3')
    let conteinerMain = document.querySelector('#containeranimation4')
    let conteinerMain2 = document.querySelector('#containeranimation5')
    let conteinerMain3 = document.querySelector('#containeranimation6')
     if(window.scrollY > 360) {
        conteiner.style.display = "block"
        conteiner.style.animationName = "slide"
        conteiner.style.animationTimingFunction = "ease"
        conteiner.style.animationDuration = "3s"
     } if(window.scrollY > 800) {
        conteinerSection.style.display = "block"
        conteinerSection.style.animationName = "slide"
        conteinerSection.style.animationTimingFunction = "ease"
        conteinerSection.style.animationDuration = "3s"
     } if(window.scrollY > 1400) {
        conteinerAside.style.display = "block"
        conteinerAside.style.animationName = "slide"
        conteinerAside.style.animationTimingFunction = "ease"
        conteinerAside.style.animationDuration = "3s"
     }  if(window.scrollY > 1900) {
        conteinerMain.style.display = "block"
        conteinerMain.style.animationName = "slide"
        conteinerMain.style.animationTimingFunction = "ease"
        conteinerMain.style.animationDuration = "3s"
    }  if(window.scrollY > 2700) {
        conteinerMain2.style.display = "block"
        conteinerMain2.style.animationName = "slide"
        conteinerMain2.style.animationTimingFunction = "ease"
        conteinerMain2.style.animationDuration = "3s"
} if(window.scrollY > 2780) {
    conteinerMain3.style.display = "block"
    conteinerMain3.style.animationName = "slide"
    conteinerMain3.style.animationTimingFunction = "ease"
    conteinerMain3.style.animationDuration = "3s"
}

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
            
        }, 2000)
    }
}

const openLogin = () => {
    const loading = document.getElementById("loading")
    const conteudo = document.getElementById("conteudo")
    const login = document.getElementById("loginDiv")
    const loginHTML = '<link rel="stylesheet" href="estilos/login.css"><div id="conteiner"><h1>Login</h1><input type="text" name="user" id="user" placeholder="Usuario" maxlength="10"><button onclick="pegarLogin()">Prosseguir</button><p style="color: red; text-align: center; margin-top: 20px;" id="errorMessage"></p></div><script src="./script/index.js"></script>'

    conteudo.style.display = 'none'
    login.innerHTML = loginHTML
    login.style.display = 'block'
}

// Ativa as funcoes
window.addEventListener('scroll', () => { seta(), conteinerAnimation() })


