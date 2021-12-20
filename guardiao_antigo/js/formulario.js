campoNumeroDecimal("recuperacao",2);
campoNumeroInteiro("primarias");
campoNumeroInteiro("secundarias");

var botaoAdicionar = document.querySelector("#adicionar-nascente");//trás o botão para dentro da variavel

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//impeço o botão de fazer o comportamento padrão, que é enviar os dados e recarregar a página
    //console.log(botaoAdicionar);
    
    var form = document.querySelector("#form-adiciona")


    //extraindo informações do paciente form
    
    var nascente = obtemNascenteDoFormulario(form);

    console.log(nascente);


    // validar informação antes de acrescentar na tabela

    var erros = validaNascente(nascente);
    console.log(erros);
    
    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        
        return; // sai da função e não deixa adicionar na tabela
    }
    

    adicionaNascenteNaTabela(nascente)//adiciona o paciente na tabela da página
    
    //limpa formulário depois de adicionado na tabela

    form.reset();

    //limpa mensagens de erro depois de adicionado na tabela

    var mesagensErro = document.querySelector("#mensagens-erro");
    mesagensErro.innerHTML = "";

});

function adicionaNascenteNaTabela(nascente){//função para adionar as nascentes do formulário na tabela

    var nascenteTr = montaTR(nascente);//cria a tr e a td da nascente
    var tabela = document.querySelector("#tabela-nascentes");//adicionando a tabela na variavel
    tabela.appendChild(nascenteTr);//adiciona a variavel pacienteTR na tabela no momento de renderizar a página

}

//função para exibir mensagens de erros quando os campos do formulário forem preenchidos errados ou não preenchidos

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    /* innerHTML configura ou retorna o conteúdo HTML (innerHTML) de um elemento.
    A propriedade innerHTML de vários tipos de elementos — incluindo <body> ou <html> — 
    pode ser retornada ou trocada. Nesse caso nós trocamos as <ul>text<ul> por "" (nada/vazio)
    */

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

    /* forEach equivale ao uso de um loop for percorrendo a array do primeiro ao último índice, 
    e executando uma função callback que recebe o elemento atual:

        var lista = ['maçã', 'banana', 'pera'];
        lista.forEach(function(item) {
            console.log(item);
        });*/
        


function obtemNascenteDoFormulario(form){//criando uma função cujo conteúdo é um objeto

    var nascente = {//criei o objeto nascente, que possui as propriedades, que nesse caso são os valores dos campos preenchido no formulário
        codigo: form.codigo.value,
        situacao: form.situacao.value,
        recuperacao: form.recuperacao.value,
        primarias: form.primarias.value,
        secundarias: form.secundarias.value,
        dataCadastro: form.dataCadastro.value,
    }

    return nascente;//retorna o valor do objeto nascente para ser usado por outra função ou variavel
}

function montaTR(nascente){

    var nascenteTr = document.createElement("tr");//crio uma tag tr
    nascenteTr.classList.add("linha-tabela");//adiciono a classe linha-tabela nessa tag tr


    nascenteTr.appendChild(montaTd(nascente.codigo, "info-codigo"));//adiciono na tr uma Td com sua respectiva calsse através da função MontaTd
    nascenteTr.appendChild(montaTd(nascente.situacao, "info-situacao"));
    nascenteTr.appendChild(montaTd(nascente.recuperacao, "info-area"));
    nascenteTr.appendChild(montaTd(nascente.primarias, "info-primaria"));
    nascenteTr.appendChild(montaTd(nascente.secundarias, "info-secundaria"));
    nascenteTr.appendChild(montaTd(nascente.dataCadastro, "info-data"));

    return nascenteTr;//retorna o Tr com todos os td adicionas e suas respectivas classes

}

function montaTd(dado,classe){//função genérica para criar Td
    var td = document.createElement("td");//na variavel td é criada a tag td
    td.textContent = dado;// a variavel td, que já está com sua tag criada, agora recebe o dado que será atribuido ao atributo dado
    td.classList.add(classe);//a variavel td, que já tem a tag <td> e o dado dessa tag, agora recebe a sua classe

    return td;//retorna a td com sua tag, dado e classe.
}

function validaNascente(nascente){

    var erros = [];

    if(nascente.codigo.length == 0){
        erros.push("O código não pode ser em branco");
    }

    if(nascente.situacao.length == 0){
        erros.push("A situação não pode ser em branco");
    }

    if(nascente.recuperacao.length == 0){
        erros.push("A recuperação não pode ser em branco");
    }

    if(nascente.primarias.length == 0){
        erros.push("A qtde. de primárias não pode ser em branco");
    }

    if(nascente.secundarias.length == 0){
        erros.push("A qtde. de secundárias não pode ser em branco");
    }

    if(nascente.dataCadastro.length == 0){
        erros.push("A data do cadastro não pode ser em branco");
    }

    if(nascente.primarias.length >= nascente.secundarias.length){
        erros.push("A quantidade de primárias precisa ser menor que as secundárias")
    }

    return erros;
}

function campoNumeroDecimal(identificador,casasdecimais){
    document.getElementById(identificador).addEventListener("change", function(){
        this.value = parseFloat(this.value).toFixed(casasdecimais);
    })
}

function campoNumeroInteiro(identificador){
    document.getElementById(identificador).addEventListener("change", function(){
        this.value = parseInt(this.value);
    })
}

