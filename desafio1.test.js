const ordena = require("./desafio1");

test("Função ordena deve retornar uma lista ordenada.", () => {
  const numeros1 = [8, 5, 10, 5, 2, 4, 4, 3];
  const numeros2 = [1, 1, 1, 1, 1, 1];
  const numeros3 = [];
  const numeros4 = [-1, 2, 0, 4, 99, 666, -10, 99, -10];
  const numeros5 = [-1, -10, -10, -999];
  const numeros6 = [3,4,5,1,0,2]

  expect(ordena(numeros1)).toStrictEqual([2, 3, 4, 5, 8, 10]);

  expect(ordena(numeros2)).toStrictEqual([1]);

  expect(ordena(numeros3)).toStrictEqual([]);

  expect(ordena(numeros4)).toStrictEqual([-10, -1, 0, 2, 4, 99, 666]);

  expect(ordena(numeros5)).toStrictEqual([-999, -10, -1]);
  
  expect(ordena(numeros6)).toStrictEqual([0,1,2,3,4,5]);
});