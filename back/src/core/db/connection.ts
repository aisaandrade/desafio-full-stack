import {Sequelize} from 'sequelize'

export const sqliteConnection = new Sequelize('db','username','password',{
    dialect: 'sqlite',
    storage: './db.sqlite'
})

export const testAutentication = async () => {
    try{
        await sqliteConnection.authenticate()
        console.log('Banco de dados conectado')
    } catch(error){
        console.error('Incapaz de se conectar ao banco de dados ', error)
    }
}