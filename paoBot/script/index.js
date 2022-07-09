let userName = 'Login'

const conteudo = document.querySelector("#conteudo")
const div = document.querySelector("#OutrosConteudos")

//loading pag inicial

const loader = () => {
    document.getElementById("loading").style.display = "block"
    document.getElementById("conteudo").style.display = "none"

    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("conteudo").style.display = "inline";
    }, 2000)
}





// Botão de Adicionar o Bot
const botaoAdicionar = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=965678250531643472&permissions=8&scope=applications.commands%20bot', '_blank')
}


// Carrega o Nome do usuario
const userLoad = () => {
    document.getElementsByName('userName').innerHTML = userName
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
    const login = document.getElementById("OutrosConteudos")
    
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
    const login = document.getElementById("OutrosConteudos")
    const loginHTML = '<link rel="stylesheet" href="estilos/login.css"><div id="conteiner"><h1>Login</h1><input type="text" name="user" id="user" placeholder="Usuario" maxlength="10"><button onclick="pegarLogin()">Prosseguir</button><p style="color: red; text-align: center; margin-top: 20px;" id="errorMessage"></p></div><script src="./script/index.js"></script>'
    
    conteudo.style.display = 'none'
    login.innerHTML = loginHTML
    login.style.display = 'block'
}

const pagina = url => {
    // if(url != 'indexx.html') {
        //     document.getElementById("conteudo").style.display = 'none'
        //     document.getElementById("OutrosConteudos").style.display = 'block'
        
        //     let xml = new XMLHttpRequest()
        
        //     xml.onreadystatechange = function () {
    //         if (xml.readyState == 4 && xml.status == 200) {
    //             document.querySelector('body').innerHTML = xml.responseText
    //             // document.getElementById("OutrosConteudos").innerHTML = xml.responseText
    //         }
    //     }
    
    //     xml.open("GET", url, true)
    
    //     xml.send()
    
    // } else {
        //     document.getElementById("conteudo").style.display = 'block'
        //     document.getElementById("OutrosConteudos").style.display = 'none'
        
        //     document.getElementById("OutrosConteudos").innerHTML = ''
        // }
        
        let xml = new XMLHttpRequest()
        
        xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.querySelector('body').innerHTML = xml.responseText
            // document.getElementById("OutrosConteudos").innerHTML = xml.responseText
        }
    }
    
    xml.open("GET", url, true)
    
    xml.send()
    
}


// Ativa as funcoes
window.addEventListener('scroll', () => { seta(), conteinerAnimation() })
loader()