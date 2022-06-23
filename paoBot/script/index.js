let userName = 'Login'

const botaoAdicionar = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=965678250531643472&permissions=8&scope=bot%20applications.commands', '_blank')
}

// Pegar login
const getLoggin = () => {
    const inputElement = document.querySelector('#user')
    if(inputElement.value == '') {
        document.querySelector('#errorMessage').innerHTML = 'Insira um nome de usuario'
    }
    else {
        userName = inputElement.value
        console.log(userName)
        document.querySelector('body').id = inputElement.value
    }
}

const openPage = (url) => {

    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function() {
        if(xml.readyState == 4 && xml.status == 200) {
            document.querySelector('body').innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}

const userLoad = () => {
    document.querySelector('#userName').innerHTML = userName
}

// NavBarConfig
const navBar = () => {
    let menu = document.querySelector('#menu')
    if(window.scrollY > 0 ) { menu.classList.add('menuFixo') }
    else { menu.classList.remove('menuFixo') }
}


// Config Da Seta
const seta = () => {
    let seta = document.querySelector('#seta')
    if(window.scrollY > 300) { seta.classList.remove('setapause') }
    else { seta.classList.add('setapause') }
}

// Ativa as funcoes
window.addEventListener('scroll', function() {seta(), navBar()})
window.addEventListener('change', userLoad())

// Loop

setInterval(() => {
    userLoad()
}, 1);