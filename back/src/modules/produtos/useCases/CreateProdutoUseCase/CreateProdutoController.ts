import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";


export class CreateProdutoController {

	constructor(private createprodutoUseCase: CreateProdutoUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const {nome, preco} = request.body
			const data = this.createprodutoUseCase.execute({nome, preco})
			return response.json(data)
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}