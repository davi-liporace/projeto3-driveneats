let selecionados =0;
function selecionar_prato(classBotao){

    const botaoSelecionado = document.querySelector('.caixa-pratos .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    pratofinal=botao.getElementsByTagName("h1")[0].innerHTML;
    continuar();
}

function selecionar_bebida(classBotao){

    const botaoSelecionado = document.querySelector('.caixa-bebida .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    bebidafinal=botao.getElementsByTagName("h1")[0].innerHTML;
    continuar();
}

function selecionar_sobremesa(classBotao){

    const botaoSelecionado = document.querySelector('.caixa-pratos2 .selecionado');
    if ( botaoSelecionado !== null){
    botaoSelecionado.classList.remove('selecionado');
    selecionados--;
    }
    
    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecionados++;
    sobremesafinal=botao.getElementsByTagName("h1")[0].innerHTML;
    continuar();
}

function continuar(){

    const elemento1 = document.querySelector('.botao-pedido');
    const elemento2 = document.querySelector('.botao-pedido2');

    if ( selecionados === 3){
        elemento1.classList.add('escondido');
        elemento2.classList.remove('escondido');
    }

}
let pratofinal;
let sobremesafinal;
let bebidafinal;
let valorprato;
let valorsobremesa;
let valorbebida;
let valortotal = valorprato + valorsobremesa + valorbebida;

function finalizar() {
    
    window.open("https://wa.me/5522999125839?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${pratofinal}
        - Bebida: ${bebidafinal}
        - Sobremesa: ${sobremesafinal}
        Total: ${valortotal}
       `));
}