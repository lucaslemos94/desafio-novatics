
/* A função recebe como entrada a lista de números.
  É usado o método sort para ordenar a lista e a estrutura SET
  para eliminar os elementos repetidos.
*/
const ordena = (numeros) => {
  return Array.from(
    new Set(
      numeros.sort((a, b) => {
        return a - b;
      })
    )
  );
}

module.exports = ordena;

