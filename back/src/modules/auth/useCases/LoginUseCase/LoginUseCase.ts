import {ILoginDTO} from './ILoginDTO'
import {IUserRepository} from "../../../../repositories/user/IUserRepository"
import * as bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { auth } from '../../../../config/auth'

export class LoginUseCase {

	constructor(private IUserRepository:IUserRepository) {}

	async execute(data:ILoginDTO) {
		const user = await this.verificaUsuario(data).then((instance) => 
			instance.get()
		)
		await this.verificaSenha(data,user.password)
		return await this.setToken(user)
	}

	private async  verificaUsuario({email}){
		const user = await this.IUserRepository.buscaUsuarioPorEmail(email)
		if(!user) throw new Error("Usuário não identificado")
		return user
	}

	private async  verificaSenha({password},dbHash){
		const isValid = await bcrypt.compare(password, dbHash)
		if(!isValid) throw new Error("Senha inválida")
	}

	private async setToken(user){
		const token = sign({}, auth.secretKey, {
			subject:String(user.id),
			expiresIn:auth.expiresIn
		})
		await this.IUserRepository.tokenUpdate(user.id, token)
		return token
	}
}