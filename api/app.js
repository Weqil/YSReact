const express = require('express')
const PORT = 3000
const app = express()
const cors = require('cors');
const db = require('./db')
const bodyParser = require('body-parser')
const filmRouter = require('./routers/filmRoute')
const categoryRouter = require('./routers/categoryRoute')
app.use(bodyParser.json())
const corsOptions = {
    origin: '*', // Разрешить доступ с любого источника
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
app.use(cors(corsOptions));
app.use('/films',filmRouter)
app.use('/category',categoryRouter)
app.use(bodyParser());

app.listen(PORT,()=>{
    console.log('server start')
})
db.connect().then(()=>{
    console.log('db connect')
}).catch(()=>{
    console.log('db noconnect')
})
