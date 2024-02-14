import { config } from 'dotenv'
config()
import express from 'express'
import { sequelize } from './DB/sequelize.js';
import { User } from './DB/Models/User.js';
import { GlassProps, StpMain } from './DB/Models/StpModel.js'
import { routerTab } from './Router/routerApi.js';
// import { cors } from 'cors'




















const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express();


// app.use(cors())
app.use(express.json())
app.use('/tab', routerTab)
app.get('/', (request, response) => {
    response.send('Hello world!');
});





async function LISTEN() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        console.clear()
        console.log('tableName:', User.tableName)
        console.log('tableName:', StpMain.tableName)
        console.log('tableName:', GlassProps.tableName)
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Running on ${HOST}:${PORT}`)
        });
    } catch (error) {

        console.error(error)
    }
}

LISTEN()