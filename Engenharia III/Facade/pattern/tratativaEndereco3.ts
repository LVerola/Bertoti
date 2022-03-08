interface enderecoProps {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    cep: string;
    complemento?: string;
}

export function tratativaEndereco3(endereco: enderecoProps) {
    // todo código complexo aqui
    console.log(endereco);
};