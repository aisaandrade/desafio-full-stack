export interface IUpdateProdutoDTO {
    id: number;
    nome?: string;
    preco?: number;
    estoque?: number;
}

export class Params{
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    constructor (val){
        Object.assign(this, val)
    }
}


