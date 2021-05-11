var campoFiltro = document.querySelector("#filtrar-tabela");//

campoFiltro.addEventListener("input", function(){
    
    var nascentes = document.querySelectorAll(".linha-tabela");//recebe todos os blocos de celulas (tr) com a classe .linha-tabela

    if (this.value.length > 0){//se o campo de filtro tiver preenchido
        for (var i = 0; i < nascentes.length; i++){//enquanto a variavel i tiver valor menor que quantidade de nascentes (linhas da tabela nesse caso) da variavel nascentes
            var nascente = nascentes[i];//a variavel nascente recebe um a um o valor da variavel nascentes
       
            var tdCodigo = nascente.querySelector(".info-codigo");//a variavel tdCodigo recebe o td (célula) da tabela cuja classe é .info-codigo;
          
            var codigo = tdCodigo.textContent;// a variavel nome recebe o valor (texto) da variavel tdCodigo
            var expressao = new RegExp(this.value, "i");
            /* RegExp é uma expressão regular para usar em campos de pesquisa.
            Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. 
            Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos exec
             e test do objeto RegExp, e com os métodos match, replace, search, e split do objeto String. */
         

        if (!expressao.test(codigo)) {//se o valor digitado no campo de filtro for diferente do valor presente na variavel "codigo", que está usando o método teste da expressão regular RegExp...
            nascente.classList.add("invisivel");//a variavel nascente recebe a classe css invisivel e seu display fica off, ou seja, ela não é mais renderizada no browser
        } else {
            nascente.classList.remove("invisivel");//se não ela remove a classe invisivel
        }
    }
    } else{//se o campo de filtro não estiver preenchido então...
        for (var i = 0; i < nascentes.length; i++){//enquanto a variavel i for menor que a quantidade de nascentes...
            var nascente = nascentes[i];//para cada valor da tabela...
            nascente.classList.remove("invisivel");//...tira a classe invisel torando o campo visivel novamente
        }
    }
})