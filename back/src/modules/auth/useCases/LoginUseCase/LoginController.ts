import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";


export class LoginController {

	constructor(private loginUseCase: LoginUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const {email,password} = request.body
			const data = await this.loginUseCase.execute({email,password})
			return response.json(data)
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}