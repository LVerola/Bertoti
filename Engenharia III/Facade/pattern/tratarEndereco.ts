import { tratativaEndereco1 } from './tratativaEndereco1';
import { tratativaEndereco2 } from './tratativaEndereco2';
import { tratativaEndereco3 } from './tratativaEndereco3';

interface enderecoProps {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    cep: string;
    complemento?: string;
}

export function tratarEndereco(endereco: enderecoProps) {
    tratativaEndereco1(endereco);

    tratativaEndereco2(endereco);
    
    tratativaEndereco3(endereco);
};