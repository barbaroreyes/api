const mysql= require('mysql2') ;
const doenv = require('dotenv');
doenv.config();

const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password:"Alarolle1978" ,
    database: 'metas',
})


module.exports = db;