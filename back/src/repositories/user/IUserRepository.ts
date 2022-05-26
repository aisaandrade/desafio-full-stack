import User from "../../models/user";

export interface IUserRepository {
    buscaUsuarioPorEmail(email:string):Promise<User>
    tokenUpdate(id:number,token:string):Promise<[affectedCount: number]>
}

