import { calcularFrete } from './calcularFrete';

var pacote = { de: "São Paulo", para: "São José dos Campos", peso: "lkg" };


calcularFrete(pacote, "sedex");
calcularFrete(pacote, "jadlog");
calcularFrete(pacote, "vex");
