class Pedido {
  constructor(dados) {
    this.dados = dados;
  }

  validar() {
    if (!this.dados.itens || this.dados.itens.length === 0) {
      throw new Error("Pedido sem itens");
    }
  }

  calcularTotal() {
    let total = 0;
    for (const item of this.dados.itens) {
      total += item.preco * item.quantidade;
    }
    if (total > 1000) {
      total *= 0.9;
    }
    return total;
  }
}

module.exports = Pedido;
