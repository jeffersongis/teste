//tras a tabela, elemento pai das linhas, exceto os cabeçalhos, por isso a escolha da tag tbody
var tabela = document.querySelector("#tabela-nascentes");

/*adiciona o evento de escuta dblclick (clique duplo) 
na tabela inteira, exceto cabeçalho (thead)
*/
tabela.addEventListener("dblclick",function(event){
    //trás o efeito do css da classe .fadeOut para o local clicado dentro da tabela;
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

/* event.target.parentNode.remove: quando esse evento ocorre na variavel tabela, 
o local que você clicou (o alvo do evento event.target) 
é removida da tabela (elemento pai parentNode), essa remoção
é feito pela função remove*/

/*fizemos desse jeito, pois se você não varre a tabela inteira, 
não é possível remover os registros inseridos pelo formulário*/

//setTimeout: segura a função por 500 ms para que dê tempo do efeito css aparecça
