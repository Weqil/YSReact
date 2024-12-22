const Pool = require('pg').Pool
const db = new Pool(
    {
        user: 'postgres', 
        host: '176.108.255.83', 
        database: 'ys', 
        password: '123', 
        port: 5432, 
    }
)

module.exports = db