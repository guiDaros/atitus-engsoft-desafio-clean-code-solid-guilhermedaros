const REGRAS = [
  { tipo: 'premium', valorAcimaDe: 1000, anosAcimaDe: 5, taxa: 0.20 },
  { tipo: 'premium', valorAcimaDe: 1000, taxa: 0.15 },
  { tipo: 'premium', valorAcimaDe: 500, taxa: 0.10 },
  { tipo: 'premium', taxa: 0.05 },
  { tipo: 'gold', valorAcimaDe: 1000, taxa: 0.10 },
  { tipo: 'gold', taxa: 0.02 },
];

function calcularDesconto(cliente, valor) {
  for (const regra of REGRAS) {
    const tipoOk = regra.tipo === cliente.tipo;
    const valorOk = regra.valorAcimaDe === undefined || valor > regra.valorAcimaDe;
    const anosOk = regra.anosAcimaDe === undefined || cliente.anosCadastro > regra.anosAcimaDe;

    if (tipoOk && valorOk && anosOk) {
      return valor * regra.taxa;
    }
  }
  return 0;
}

module.exports = calcularDesconto;
