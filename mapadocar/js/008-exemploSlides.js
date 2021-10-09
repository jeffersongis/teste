var numSlide=1;//guarda o número do slide

mostrarSlide(1);

function mudarSlide(ns) {
    mostrarSlide(numSlide += ns);//o ns vai estar 1 ou -1, quando a seta for clicada, 1 para somar e -1 para subtrair
}

function slideAtual(ns) {
    mostrarSlide(numSlide = ns);//a função vai passar o valor do slide atual
}

function mostrarSlide(ns) {
    var slides=document.getElementsByClassName("slide");//array de slides
    var indicadores=document.getElementsByClassName("indicador")//array de indicadores
    if(ns > slides.length){//estou no ultimo slide e cliquei para direita...
        numSlide=1;//...ele volta para o slide 1
    }
    if(ns < 1){//estou no primeiro slide, clico para a esquerda...
        numSlide=slides.length;//...ele vai para o ultimo slide
    }
    for(var i=0;i<slides.length;i++){//for para ocultar todos os slides
        slides[i].style.display="none"//todos ficam display none
    }

    for(var i=0;i<indicadores.length;i++){//for para tirar a classe ativo de todos os indicadores (bolinhas)
        indicadores[i].className=indicadores[i].className.replace(" ativo","")//troca classe de nome ativo por ""(nada)
    } 
    slides[numSlide-1].style.display="block"//tirei 1, para ficar na posição correta do array, que começa em 0 e não em 1. Estou trocando o valor do display:none para display:block no css da classe .slide
    indicadores[numSlide-1].className+=" ativo";//tirei 1 por causa da posição do array que começa em zero, e estou deixando a bolinha ativa no css
}
