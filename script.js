const botoes = [
    ['7', '8', '9', 'DEL', '4' , '5', '6', 'AC', '1', '2', '3', '+', '0', '×', '÷', '−', '^', '√', '.', '='],
];

const container = document.getElementById('botoes');

//Define o estilo e comportamento dos botões
botoes.forEach(linha => {
    linha.forEach(valor => {
        const botao = document.createElement('button');

        const ehNumero = !isNaN(valor);
        botao.className = !isNaN(valor)
            ? 'botao'
            : valor === 'DEL' || valor === 'AC'
            ? 'botao_deletar'
            : 'botao_operacao';

        botao.textContent = valor;

        botao.onclick = () => {
            if (valor === '=') {
                calcula();
            }
            else if(valor == 'DEL'){
                if(tela.dataset.novoNumero === 'true'){
                    return;
                }
                else{
                    limpa_ultimo_caractere();
                }
            }
            else if (valor == 'AC') {
                limpa_tudo();
            }
            else {
                mostra_na_tela(valor);
            }
        };

        container.appendChild(botao);
    });
    container.appendChild(document.createElement('br'));
});


//Responsividade ao teclado

document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    // Mapas de conversão para manter a lógica dos botões
    const mapaTeclas = {
        '*': '×',
        '/': '÷',
        '-': '−',
        '+': '+',
        '^': '^',
        '.': '.',
        'Enter': '=',
        '=': '=',
        'Backspace': 'DEL',
        'Delete': 'AC'
    };

    if (!isNaN(tecla)) {
        mostra_na_tela(tecla); // Número
    } else if (mapaTeclas[tecla]) {
        const valor = mapaTeclas[tecla];
        if (valor === '=')
            calcula();
        else if (valor === 'DEL')
            limpa_ultimo_caractere();
        else if (valor === 'AC')
            limpa_tudo();
        else
            mostra_na_tela(valor);
    } else if (tecla === 'r') {
        // tecla especial para raiz quadrada
        mostra_na_tela('√');
    }
});
