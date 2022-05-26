import { Request, Response } from "express";
import { Params } from "./IUpdateProdutoDTO";
import { UpdateProdutoUseCase } from "./UpdateProdutoUseCase";

export class UpdateProdutoController {

	constructor(private updateprodutoUseCase: UpdateProdutoUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const {id} = new Params(request.params)
			const {nome, preco, estoque} = new Params (request.query)
			console.log(nome, preco, estoque)
			const data = await this.updateprodutoUseCase.execute({id, nome, preco, estoque})
			return response.json(data)
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}