import { sequelize } from "../sequelize";
import { DataTypes } from "sequelize";


export const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "GUEST" },
}, { freezeTableName: false, timestamps: false })