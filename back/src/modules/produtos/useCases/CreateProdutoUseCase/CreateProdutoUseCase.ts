import {ICreateProdutoDTO} from './ICreateProdutoDTO'
import {IProdutoRepository} from '../../../../repositories/IProdutoRepository'

export class CreateProdutoUseCase {

	constructor(private IProdutoRepository:IProdutoRepository) {}

	async execute(data:ICreateProdutoDTO) {
		return await this.IProdutoRepository.createProduto(data.nome, data.preco)
	}
}