class NotificadorService {
  async enviar(pedido) {
    console.log(`Enviando e-mail para ${pedido.clienteEmail}...`);
  }
}

module.exports = NotificadorService;
