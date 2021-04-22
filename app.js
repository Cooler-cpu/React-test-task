require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

const models = require('./models/models')

const PORT = process.env.PORT || 5000

const app = express()

const router = require('./routes/index')

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', router)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()