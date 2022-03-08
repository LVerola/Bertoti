import { pacoteProps } from './interfaces';

export var Envio = function () {
    this.empresa = "";
};

Envio.prototype = {
    setStrategy: function (empresa: string) {
        this.empresa = empresa;
    },

    calcular: function (pacote: pacoteProps) {
        return this.empresa.calcular(pacote);
    }
};