import Produto from "../models/products";

export interface IProdutoRepository {
    createProduto(nome: string, preco:number): Promise <Produto>
    readProduto():Promise<Produto[]>
    updateProduto(id, nome?, preco?,estoque?):Promise<[affectedCount: number]>
    deleteProduto({id}):Promise<number>
}

