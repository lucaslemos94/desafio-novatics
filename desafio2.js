/* A função tem como entrada a matriz do jogo SUDOKU.
   Uso do laço for aninhado para percorrer a matriz e então
   preenche-la com números pseudo randômicos.*/
function preencheMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] == ".")
        matriz[i][j] = Math.floor(Math.random() * 9 + 1).toString();
    }
  }

  return matriz;
}

/* A função tem como entrada o matriz do jogo SUDOKU.
   Percorre cada elemento da linha e verifica
   se o tamanho desse elemento (lista) é diferente desse mesmo elemento
   em um estrutura SET. Se os tamanhos forem diferentes, então significa
   que há pelo menos um número repetido nessa linha. */
function validaPrimeiraCondicao(matriz) {
  flagRepetido = true;
  linha = 0;

  while (linha < matriz.length && flagRepetido) {
    elemento = matriz[linha];
    setElemento = new Set(elemento);

    if (elemento.length !== setElemento.size) flagRepetido = false;

    linha++;
  }

  return flagRepetido;
}

/* A função tem como entrada o matriz do jogo SUDOKU.
   Percorre cada coluna e verifica se o tamanho dessa coluna (lista) é diferente dessa mesma coluna
   em um estrutura SET. Se os tamanhos forem diferentes, então significa
   que há pelo menos um número repetido nessa coluna. */
function validaSegundaCondicao(matriz) {
  coluna = 0;
  flagRepetido = true;

  while (coluna < matriz.length && flagRepetido) {
    const colunaArray = matriz.map((elemento) => elemento[coluna]);
    colunaSet = new Set(colunaArray);

    if (colunaArray.length !== colunaSet.size) flagRepetido = false;

    coluna++;
  }

  return flagRepetido;
}

/* A função tem como entrada o matriz do jogo SUDOKU.
   Cada submatriz é uma lista, então verifica se há
   pelo menos um elemento repetido nessa lista.
 */
function validaTerceiraCondicao(matriz) {
  flagRepetido = true;
  i = 0;

  while (flagRepetido && i < matriz.length) {
    const elemento = matriz[i];

    if (elemento.length !== new Set(elemento).size) flagRepetido = false;

    i++;
  }

  return flagRepetido;
}

/* A função tem como entrada a matriz do jogo SUDOKU.
   Divide cada area da matriz em submatrizes 9x9
*/
function divideSubMatrizes(matriz) {
  let areas = new Array(9).fill([]);

  matriz.forEach((numbers, idx) => {
    let segment = Math.floor(idx / 3);
    areas[segment] = [
      ...areas[segment],
      ...matriz[idx].slice(0, 3),
    ];
    areas[segment + 3] = [
      ...areas[segment + 3],
      ...matriz[idx].slice(3, 6),
    ];
    areas[segment + 6] = [
      ...areas[segment + 6],
      ...matriz[idx].slice(6, 9),
    ];
  });

  const subMatrizes = [];

  areas.forEach((area) => {
    subMatrizes.push(area);
  });

  return subMatrizes;
}

module.exports ={
  preencheMatriz,divideSubMatrizes,validaPrimeiraCondicao,
  validaSegundaCondicao, validaTerceiraCondicao
}