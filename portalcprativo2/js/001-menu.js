document.getElementById("navbar").innerHTML=
    '<a href="index.html" class="logo_menu"><img src="img/001-LOGO.png" class="logo"></a>'+
                '<ul class="nav-menu">'+
                    '<li class="nav-item">'+
                        '<a href="#banner" class="nav-link">Início</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link1" class="nav-link" onclick="getPos(\'sobrenos\')">Sobre nós</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link2" class="nav-link" onclick="getPos(\'comprovacao\')">Quadro de comprovações</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link3" class="nav-link" onclick="getPos(\'cpr\')">CPRs Emitidas</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item nav-itempc">' +
                        '<p id="link4" class="nav-link" onclick="getPos(\'faqPc\')">Mapa Geral</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item nav-itemcelular">' +
                        '<p id="link5" class="nav-link" onclick="getPos(\'vidTut\')">Mapa Geral</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<p id="link5" class="nav-link" onclick="getPos(\'ativo_disponivel\')">Ativos</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="faq.html" class="nav-link">FAQ</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="ajuda.html" class="nav-link">Ajuda</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a href="#" class="nav-link">Administração</a>' +
                    '</li>' +
                '</ul>' +

                '<div class="hamburger">' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                '</div>'