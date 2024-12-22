const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connect = mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE
});
connect.connect((error)=>{
    if (error) throw error;
    console.log("Connected successful");
})

module.exports = connect;