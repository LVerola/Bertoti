import { pacoteProps } from './interfaces';

export var SEDEX = function () {
    this.calcular = function (pacote: pacoteProps) {
        // calculos SEXDEX...
        console.log(pacote);
        return "$45,95";
    }
};