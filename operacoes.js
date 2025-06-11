export function calcula() {
    const tela = document.getElementById('tela');
    let expressao = tela.value;
    expressao = expressao.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        tela.value = eval(expressao);
    } catch {
        tela.value = 'Erro';
    }
}

export function limpa_ultimo_caractere(){
    const tela = document.getElementById('tela');
    if((tela.value.length > 0) && (tela.dataset.novoNumero === 'false')){ // Não apaga caso o número na tela seja o resultado de alguma operação
        tela.value = tela.value.slice(0, -1);
    }
    if(tela.value.length === 0){
        tela.dataset.novoNumero = 'false'; // Se a tela ficar vazia, não é um novo número
    }

}