import {IProdutoRepository} from '../../../../repositories/IProdutoRepository'

export class ReadProdutoUseCase {

	constructor(private IProdutoRepository:IProdutoRepository) {}

	async execute() {
		return await this.IProdutoRepository.readProduto()
	}
}