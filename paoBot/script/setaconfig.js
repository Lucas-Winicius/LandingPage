(function () {
    var seta = document.getElementById('seta'); 
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) seta.classList.remove('setapause'); 
        else seta.classList.add('setapause');
    });
})();


