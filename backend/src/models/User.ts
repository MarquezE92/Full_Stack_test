import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define(
    'User',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING,
          allowNull: false
        },
        favorite_sport: {
          type: DataTypes.STRING,
          allowNull: false
        }
    },
    {
        timestamps: false,
    }
)

export default User