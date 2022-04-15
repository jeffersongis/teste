document.getElementById("navbar").innerHTML=
    '<a href="index.html" class="logo_menu"><img src="img/001-LOGO.png" class="logo"></a>'+
                '<ul class="nav-menu">'+
                    '<li class="nav-item">'+
                        '<a href="#banner" class="nav-link">Início</a>'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link1" class="nav-link" onclick="getPos(\'ativoambiental\')">Ativo Ambiental</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->'+
                    '</li>'+
                    '<li class="nav-item">'+
                        '<p id="link2" class="nav-link" onclick="getPos(\'cprverde\')">CPR Verde</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<p id="link3" class="nav-link" onclick="getPos(\'comprovacao\')">Comprovações</p><!--usei js para que a barra de navegação não cobrisse o titulo da seção-->' +
                    '</li>' +
                    '<li class="nav-item">'+
                        '<a href="https://jeffersongis.github.io/teste/portalcprativo2/index.html" class="nav-link">Portal</a>'+
                    '</li>'+
                '</ul>' +

                '<div class="hamburger">' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                    '<span class="bar"></span>' +
                '</div>'