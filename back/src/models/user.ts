import { DataTypes, Model } from "sequelize";
import { sqliteConnection } from "../core/db/connection";

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    },
    {
        sequelize: sqliteConnection,
        modelName: "User"
    }
)

export default User