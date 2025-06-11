export function mostra_na_tela(valor){
    const tela = document.getElementById('tela');
    if(tela.dataset.novoNumero === 'true'){
        tela.value = '';
        tela.dataset.novoNumero = 'false';
    }
    else if(['+', '-', '×', '÷'].includes(tela.value.slice(-1)) && ['+', '-', '×', '÷'].includes(valor)){
        return;// Não permite inserior um operador após o outro.
    }
    tela.value += valor;
}
