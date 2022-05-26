export interface IDeleteProdutoDTO {
    id: number;
}

export class Params{
    id: number;
    constructor (val){
        Object.assign(this, val)
    }
}