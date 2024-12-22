const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./route");
dotenv.config();
require("./connection");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(port,()=>{
    console.log("Running server");
})