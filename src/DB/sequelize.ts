import { Sequelize, DataTypes } from "sequelize";
// import { config } from 'dotenv'
// config()



const db_name = process.env.DB_NAME || 'attik_stp'
const db_user = process.env.DB_USER || 'postgres'
const db_pass = process.env.DB_PASSWORD || 'root'
const db_host = process.env.DB_HOST || 'localhost'
const db_port = process.env.DB_PORT || '5432'


const sequelize = new Sequelize(
    db_name,
    db_user,
    db_pass,
    {
        dialect: 'postgres',
        host: db_host,
        port: +db_port

    })

export { sequelize, DataTypes }