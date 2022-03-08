interface pacoteProps{
    de: string;
    para: string;
    peso: string;
}

export function calcularFrete(pacote: pacoteProps, empresa: "sedex" | "jadlog" | "vex") {
    if (empresa === "sedex") {
        // calculos SEXDEX...
        console.log(pacote);
        return "$45,95";
    } if (empresa === "jadlog") {
         // calculos JADLOG...
         console.log(pacote);
         return "$45,95";
    } if (empresa === "vex") {
         // calculos VEX...
         console.log(pacote);
         return "$45,95";
    }
}