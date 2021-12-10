
    function openTutorial(evt, videoTutorial) {
        let i, tabcontent, tablinks
        let srcVideo = ["TazECHSIpB4","uIzDaUkYAIs","6DgvtN2CYDs","0RS99IVwZTE","BY-Go8N9Jlw","q5_ZsBV8Hq8","BrqnYzri6UY"];//todos os ids do vídeos do youtube
        
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";//ao clicar em uma aba eu deixo todos os conteudos com display none;
            tabcontent[i].innerHTML = "<div class='videoTutorialCont'><iframe id='vd1 class='vidC' width='100%' height='100%' src=https://www.youtube.com/embed/"+srcVideo[i]+" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";//ao clicar em uma aba eu 'recarrego' todos os videos, com isso, ele não deixa o vídeo anterior tovando quando eu trocar de aba.
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");//ao clicar em uma aba, todas ficam com classe ""
        }

        document.getElementById(videoTutorial).style.display = "block";//somente o conteúdo alvo do clique aparece uma vez que todas estão com display="none"
        evt.currentTarget.className += " active"; //somente a aba clicada fica com a classe "active", e assim ela fica em destaque ("dee outra cor");

        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();// a primeira aba vem clicada ao carregar a página
