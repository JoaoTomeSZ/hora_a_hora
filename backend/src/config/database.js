import mysql from'mysql2';
import dotenv from 'dotenv'
dotenv.config()

const db = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10
})

export default db;