//Este arquivo está somente ligados em outras páginas somente a index.html que não recebe nada diretamente daqui

var i = setInterval(function () {
    
    clearInterval(i);
  
    document.getElementById("loading2").style.display = "none";
    document.getElementById("conteudo2").style.display = "inline";
}, 500);



//Botão de convite para o Servidor
const conviteServer = () => {
    window.open('https://discord.gg/gHwhQTtQ87')
}
