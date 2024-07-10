function somapontos() {
    var pontuacao = parseInt(localStorage.getItem('pontuacao') || 0);
    var escolha1 = parseInt(document.getElementById('escolha1').value);
    var escolha2 = parseInt(document.getElementById('escolha2').value);
    var escolha3 = parseInt(document.getElementById('escolha3').value);

    if (escolha1 === 2 || escolha2 === 2 || escolha3 === 3) {
        pontuacao += 10;
    }

    localStorage.setItem('pontuacao', pontuacao);

    var resultadoFinal = document.getElementById('resultadoFinal');
    var acertos = 0;
    if (escolha1 === 1) {
        acertos++;
    }
    if (escolha2 === 3) {
        acertos++;
    }
    if (escolha3 === 2) {
        acertos++;
    }
    resultadoFinal.style.display = 'block';
    document.getElementById('resultadoTexto').innerHTML = 'Você acertou a ' + acertos + ' perguntas!';
}