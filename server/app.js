const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("./connection");

const port = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port,()=>{
    console.log("Running server");
})