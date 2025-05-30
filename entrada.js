export function mostra_na_tela(valor){
    const tela = document.getElementById('tela');
    if(tela.dataset.novoNumero === 'true'){
        tela.value = '';
        tela.dataset.novoNumero = 'false';
    }
    tela.value += valor;
}
