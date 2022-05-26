import { Request, Response } from "express";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";
import { Params } from "./IDeleteProdutoDTO";

export class DeleteProdutoController {

	constructor(private deleteprodutoUseCase: DeleteProdutoUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const {id} = new Params(request.params)
			console.log(id)
			const data = await this.deleteprodutoUseCase.execute({id})
			return response.json(data)
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}