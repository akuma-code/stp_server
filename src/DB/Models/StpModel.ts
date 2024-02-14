import { DataTypes, sequelize } from '../sequelize'

const StpMain = sequelize.define('stp_formula', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    formula: { type: DataTypes.STRING, unique: true, allowNull: false }
}, { timestamps: false })

const GlassProps = sequelize.define('glass_prop', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    multi: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    simple: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    soundproof: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    hitproof: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    solarproof: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
}, { timestamps: false })


GlassProps.hasOne(StpMain)
StpMain.belongsTo(GlassProps)






export { GlassProps, StpMain }
