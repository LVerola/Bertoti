import { pacoteProps } from './interfaces';

export var VEX = function () {
    this.calcular = function (pacote: pacoteProps) {
        // calculos VEX...
        console.log(pacote);
        return "$43,20";
    }
};