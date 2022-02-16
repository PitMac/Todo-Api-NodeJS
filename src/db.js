const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'task_app'
})

conn.connect()

module.exports = {conn}