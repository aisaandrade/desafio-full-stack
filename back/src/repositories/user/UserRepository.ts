import User from "../../models/user";

export class UserRepository{
    async buscaUsuarioPorEmail(email:string){
        return await User.findOne({where:{email}})
    }
    async tokenUpdate(id:number,token:string){
        return await User.update({token},{where:{id}})
    }
}