import {IProdutoRepository} from '../../../../repositories/IProdutoRepository'
import {IDeleteProdutoDTO} from './IDeleteProdutoDTO'

export class DeleteProdutoUseCase {

	constructor(private IProdutoRepository:IProdutoRepository) {}

	async execute(data:IDeleteProdutoDTO) {
		return await this.IProdutoRepository.deleteProduto(data)
	}
}