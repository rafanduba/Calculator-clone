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