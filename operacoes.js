export function calcula() {
    const tela = document.getElementById('tela');
    let expressao = tela.value;
    expressao = expressao.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        tela.value = eval(expressao);
    } catch {
        tela.value = 'Erro';
    }
    tela.dataset.novoNumero = 'true'; // Define que o resultado é um novo número
}

export function limpa_ultimo_caractere(){
    const tela = document.getElementById('tela');
    if((tela.value.length > 0) && (tela.dataset.novoNumero === 'false')){ // Não apaga caso o número na tela seja o resultado de alguma operação
        tela.value = tela.value.slice(0, -1);
    }
    if(tela.value.length === 0){
        tela.dataset.novoNumero = 'false'; // Se a tela ficar vazia, não é um novo número
    }
    const atual = tela.value;

    // Se estamos no meio de uma nova operação (usuário digitando após um resultado)
    if (tela.dataset.novoNumero === 'false') {
        // Só apaga se há algo além de 'aux'
        if (atual.length > aux.length) {
            tela.value = atual.slice(0, -1);
        }
    }

    // Se for o resultado de uma operação, reseta para o valor anterior (aux)
    else if (tela.dataset.novoNumero === 'true') {
        if (aux) {
            tela.value = aux;
            tela.dataset.novoNumero = 'false';
        }
    }

    // Se a tela ficar igual ao aux (ou vazia), marcar que não é mais novo número
    if (tela.value === aux || tela.value.length === 0) {
        tela.dataset.novoNumero = 'false';
    }
}
