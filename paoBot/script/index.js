const botaoAdicionar = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=965678250531643472&permissions=8&scope=bot%20applications.commands', '_blank')
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

// Ativa a funcao da seta e do nav
window.addEventListener('scroll', function() {seta(), navBar()})