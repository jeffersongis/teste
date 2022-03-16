function getPos(id) {//parametro é a seção
    let el = document.getElementById(id);//obtém a seção
    for (var lx=0, ly=0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        ly = ly-65;//posicao da secao menos a altura do menu nav
        window.scrollTo(0, ly);//vai até a altura da seção na página;
}