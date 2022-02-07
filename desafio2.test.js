var sudoku = require("./desafio2");

// matriz para testar preenchimento
var matriz1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

//jogo inválido (exemplo do enunciado do desafio)
var matriz2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

//jogo válido
var matriz3 = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

describe("Happy Path", () => {
  test("Um jogo sudoku válido.", () => {
    //matriz 3 é um jogo sudoku válido
    expect(sudoku.validaPrimeiraCondicao(matriz3)).toEqual(true);
    expect(sudoku.validaSegundaCondicao(matriz3)).toEqual(true);
    expect(sudoku.validaTerceiraCondicao(sudoku.divideSubMatrizes(matriz3))).toEqual(true);
  });
});

describe('Sad Path',()=>{
    test('Um jogo sudoku inválido.',()=>{
        //matriz 2 é um jogo inválido
        expect(sudoku.validaPrimeiraCondicao(sudoku.preencheMatriz(matriz2))).toEqual(false);
        expect(sudoku.validaSegundaCondicao(matriz2)).toEqual(false);
        expect(sudoku.validaTerceiraCondicao(sudoku.divideSubMatrizes(matriz2))).toEqual(false);
    })
})