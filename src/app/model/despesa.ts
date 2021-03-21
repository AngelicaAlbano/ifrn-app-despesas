import { TipoDespesa } from './tipodespesa';
export class Despesa {
    motivo: string;
    valor: number;
    tipo: TipoDespesa;
    data: string; //ISOString para data
    origem: string; // estabelecimento em que foi feita
    

    constructor(id: string, val: number, tp: TipoDespesa, data: string, org: string) {
        this.motivo = id;
        this.valor = val;
        this.tipo = tp;
        this.data = data;
        this.origem= org;
    }
}