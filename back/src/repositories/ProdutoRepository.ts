import Produto from "../models/products";

export class ProdutoRepository {
    async createProduto(nome: string, preco:number){
        return await Produto.create({nome, preco})
    }
    async readProduto(){
        return await Produto.findAll()
    }
    async updateProduto(id, nome?, preco?, estoque?) {
        const parametros = {nome, preco, estoque}
        console.log(parametros)
        return await Produto.update(
            parametros, 
            {
                where:{id}
            }
        )
    }
    async deleteProduto({id}) {
        return await Produto.destroy({where:{id:id}}) 
    }
}