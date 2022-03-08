import { Envio } from './envio';

import { SEDEX } from './sedex';
import { JADLOG } from './jadlog';
import { VEX } from './vex';

import { pacoteProps } from './interfaces';

export function calcularFrete(pacote: pacoteProps) {
    var sedex = new SEDEX();
    var jadlog = new JADLOG();
    var vex = new VEX();

    var envio = new Envio();

    envio.setStrategy(sedex);
    console.log("SEDEX Strategy: " + envio.calcular(pacote));
    envio.setStrategy(jadlog);
    console.log("JADLOG Strategy: " + envio.calcular(pacote));
    envio.setStrategy(vex);
    console.log("VEX Strategy: " + envio.calcular(pacote));
}