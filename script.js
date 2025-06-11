const botoes = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '+', '-'],
    ['×', '÷', '='],
    ['DEL']
];

const container = document.getElementById('botoes');

botoes.forEach(linha => {
    linha.forEach(valor => {
        const botao = document.createElement('button');

        const ehNumero = !isNaN(valor);
        botao.className = ehNumero ? 'botao' : 'operacao';

        botao.textContent = valor;

        botao.onclick = () => {
            if (valor === '=') {
                calcula();
            }
            else if(valor == 'DEL'){
                limpa_ultimo_caractere();
            }
            else {
                mostra_na_tela(valor);
            }
        };

        container.appendChild(botao);
    });
    container.appendChild(document.createElement('br'));
});
