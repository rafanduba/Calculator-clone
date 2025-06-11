let aux = ''; // Armazena o resultado anterior

export function mostra_na_tela(valor){
    const tela = document.getElementById('tela');

    const operador = ['+', '-', '×', '÷'];
    const ultimo_caractere = tela.value.slice(-1);

    // Impede dois operadores seguidos
    if (operador.includes(ultimo_caractere) && operador.includes(valor)) {
        return;
    }

    // Se for novo número, limpar a tela antes de escrever o próximo valor
    if (tela.dataset.novoNumero === 'true') {
        aux = tela.value; // Armazena o resultado anterior
        tela.dataset.novoNumero = 'false';
    }
    
    tela.value += valor;
}
