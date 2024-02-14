import { config } from 'dotenv'
config()
import express from 'express'
import { sequelize } from './DB/sequelize';


















const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express();

app.get('/', (request, response) => {
    response.send('Hello world!');
});
async function LISTEN() {

    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true, force: true })
        console.clear()
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Running on ${HOST}:${PORT}`)
        });
    } catch (error) {

    }
}

LISTEN()