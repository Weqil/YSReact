const Pool = require('pg').Pool
const db = new Pool(
    {
        user: 'postgres', 
        host: 'localhost', 
        database: 'ys', 
        password: '123', 
        port: 5432, 
    }
)

module.exports = db