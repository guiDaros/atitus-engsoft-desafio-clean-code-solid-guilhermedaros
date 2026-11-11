const Pedido = require("./Pedido");
const VendasRepository = require("./VendasRepository");
const NotificadorService = require("./NotificadorService");

class SistemaDeVendas {
  constructor(repository = new VendasRepository(), notificador = new NotificadorService()) {
    this.repository = repository;
    this.notificador = notificador;
  }

  async processarVenda(dadosPedido) {
    const pedido = new Pedido(dadosPedido);
    pedido.validar();
    const total = pedido.calcularTotal();

    await this.repository.salvar(dadosPedido);
    await this.notificador.enviar(dadosPedido);

    return { ...dadosPedido, total, status: "pago" };
  }
}

module.exports = SistemaDeVendas;
