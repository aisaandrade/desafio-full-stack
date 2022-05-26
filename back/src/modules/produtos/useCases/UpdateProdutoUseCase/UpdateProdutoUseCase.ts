import {IProdutoRepository} from '../../../../repositories/IProdutoRepository'
import {IUpdateProdutoDTO} from './IUpdateProdutoDTO'

export class UpdateProdutoUseCase {

	constructor(private IProdutoRepository:IProdutoRepository) {}

	async execute(data:IUpdateProdutoDTO) {
		console.log(data)
		return await this.IProdutoRepository.updateProduto(
			data.id,
			data.nome,
			data.preco,
			data.estoque
		)
	}

}