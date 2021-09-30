document.getElementById("navbar").innerHTML=
    '<a href="index.html" class="logo_menu"><img src="img/001-LOGO.png" class="logo"></a>'+
                '<ul class="nav-menu">'+
                    '<li class="nav-item">'+
                        '<a href="#banner" class="nav-link">Início</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link1" class="nav-link" onclick="getPos(\'comofunciona\')">Como funciona</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link2" class="nav-link" onclick="getPos(\'bases\')">Bases</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<p id="link3" class="nav-link" onclick="getPos(\'exemplos\')">Exemplos</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<p id="link4" class="nav-link" onclick="getPos(\'informativos\')">Informativos</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<p id="link5" class="nav-link" onclick="getPos(\'sobre\')">Sobre</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="faq.html" class="nav-link">FAQ</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="https://www.whatsapp.com/?lang=pt_br"  target="_blank" class="nav-link">Suporte</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="" class="nav-link">Tutorial</a>' +
                    '</li>' +
                '</ul>' +
                '<a href="https://teste.suportetm.com.br/car/app/entrar" target="_blank" class="botao_entrar"><button class="botao_primario">ENTRAR</button></a>' +

                '<div class="hamburger">' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                '</div>'