import { DataTypes } from "sequelize";
import sequelize from "../db.ts";

const User = sequelize.define(
    'User',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
          type: DataTypes.STRING,
        },
        country: {
          type: DataTypes.STRING,
        },
        favorite_sport: {
          type: DataTypes.STRING,
        }
    },
    {
        timestamps: false,
    }
)

export default User