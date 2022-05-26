import { DataTypes, Model } from "sequelize";
import { sqliteConnection } from "../core/db/connection";

class Produto extends Model {}

Produto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        preco: DataTypes.NUMBER,
        estoque: {
            type: DataTypes.NUMBER,
            defaultValue: 0
        }
    },
    {
        sequelize: sqliteConnection,
        modelName: "Produto"
    }
)

export default Produto