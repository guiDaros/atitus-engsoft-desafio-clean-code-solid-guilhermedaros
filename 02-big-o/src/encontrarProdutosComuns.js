function encontrarProdutosComuns(listaA, listaB) {
  const itensDeB = new Set(listaB);
  const comuns = [];

  for (const item of listaA) {
    if (itensDeB.has(item)) {
      comuns.push(item);
    }
  }

  return comuns;
}

module.exports = encontrarProdutosComuns;