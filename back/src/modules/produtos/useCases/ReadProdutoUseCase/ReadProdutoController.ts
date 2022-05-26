import { Request, Response } from "express";
import { ReadProdutoUseCase } from "./ReadProdutoUseCase";


export class ReadProdutoController {

	constructor(private readprodutoUseCase: ReadProdutoUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const data = await this.readprodutoUseCase.execute()
			return response.json(data)
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}