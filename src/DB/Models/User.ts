
import { sequelize, DataTypes } from "../sequelize";


const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "GUEST" },
}, { freezeTableName: false, timestamps: false })

export { User }
// export const admin = User.build({ username: "Akuma", role: 'ADMIN', password: "root" })
// admin.save()