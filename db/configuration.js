const mysql= require('mysql2') ;
const doenv = require('dotenv');
doenv.config();

const db = mysql.createPool({
    host:"localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD ,
    database: 'metas',
})


module.exports = db;