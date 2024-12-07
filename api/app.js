const express = require('express')
const PORT = 3000
const app = express()
const db = require('./db')
const filmRouter = require('./routers/filmRoute')
app.use('/films',filmRouter)
app.listen(PORT,()=>{
    console.log('server start')
})
db.connect().then(()=>{
    console.log('db connect')
}).catch(()=>{
    console.log('db noconnect')
})
